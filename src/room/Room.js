import React, { useEffect } from 'react';
import db from '../firebase.config';
import createNewConnection from './createNewConnection';
import firebase from 'firebase'

export default function Room() {
  window.connectedCandidates = [];
  let localStream;
  const openUserMedia = async () => {
    localStream = await navigator.mediaDevices.getUserMedia(
      {video: true, audio: true});
    document.querySelector('#localVideo').srcObject = localStream;
  }
  openUserMedia();
  const roomId = window.location.search.split('=')[1];
  const roomRef = db.collection('rooms').doc(`${roomId}`);
  const RTCPeerConnections = {};
  let myId = 0;
  useEffect(() => {
    window.addEventListener('beforeunload', async (e) => {
      e.preventDefault();
      e.returnValue = '';
      for (const candidateId of Object.keys(RTCPeerConnections)) {
        RTCPeerConnections[candidateId].close();
        await roomRef.update({
          [`${candidateId}.${myId}`]: firebase.firestore.FieldValue.delete()
        });
      }
      await roomRef.update({
        [myId]: firebase.firestore.FieldValue.delete()
      });
    });
  },[]);
  const createConnection = async (candidateId) => {
    const connection = createNewConnection(localStream, candidateId);
    RTCPeerConnections[candidateId] = connection;
    connection.onicecandidate = async e =>  {
      if (e.candidate) {
        await roomRef.update({
          [`${candidateId}.${myId}.candidate_for_${candidateId}`]: firebase.firestore.FieldValue.arrayUnion(e.candidate.toJSON())
        });
      }
    }
    connection.onicegatheringstatechange = async ev => {
      if (ev.target.iceGatheringState === 'complete' && !window.connectedCandidates.includes(candidateId)) {
        await roomRef.update({
          [`${candidateId}.${myId}.iceGatheringComplete_for_${myId}`]: true
        });
      }
    }
    connection.onicecandidateerror = (e) => {console.log(e.errorText)}
    const offer = await connection.createOffer();
    await roomRef.update({
      [`${candidateId}.${myId}`]: {
        offer: {
          type: offer.type,
          sdp: offer.sdp
        }
      }
    });
    connection.setLocalDescription(offer);
    console.log('step 1: offer created and updated');
  }
  const updateCadidateArray = async (candidate, candidateId) => {
    if (candidate) {
      await roomRef.update({
        [`${myId}.${candidateId}.candidate_for_${candidateId}`]: firebase.firestore.FieldValue.arrayUnion(candidate.toJSON())
      });
    }
  }
  const updateICEGathering = async (iceGatheringState, candidateId) => {
    if (iceGatheringState === 'complete' && !window.connectedCandidates.includes(candidateId)) {
      await roomRef.update({
        [`${myId}.${candidateId}.iceGatheringComplete_for_${myId}`]: true
      });
    }
  }
  const init = async () => {
    const roomSnapshot = await roomRef.get();
    const candidates = roomSnapshot.exists && roomSnapshot.data();
    const totalCandiates = parseInt(Object.keys(candidates).length);
    if (totalCandiates) {
      myId = parseInt(Object.keys(candidates)[totalCandiates - 1]) + 1;
      Object.keys(roomSnapshot.data()).forEach(createConnection);
    }
    await roomRef.update({
      [myId]: {}
    });
    roomRef.onSnapshot(async snapshot => {
      if (snapshot && snapshot.data()) {
        // search offer, consume offer and create answer
        const myDataConnections = snapshot.data()[myId];
        for (const candidateId of Object.keys(myDataConnections)) {
          if (!window.connectedCandidates.includes(candidateId)) {
            const data = myDataConnections[candidateId];
            if (data && data.offer && !RTCPeerConnections[candidateId]) {
              const offer = data.offer;
              const connection = createNewConnection(localStream, candidateId);
              RTCPeerConnections[candidateId] = connection;
              connection.onicecandidate = e =>  {
                updateCadidateArray(e.candidate, candidateId);
              }
              connection.onicegatheringstatechange = ev => {
                updateICEGathering(ev.target.iceGatheringState, candidateId);
              }
              const remoteOffer = new RTCSessionDescription(offer);
              await connection.setRemoteDescription(remoteOffer);
              const answer = await connection.createAnswer()
              await connection.setLocalDescription(answer);
              await roomRef.update({
                [`${myId}.${candidateId}`]: {
                  answer: {
                    type: answer.type,
                    sdp: answer.sdp
                  }
                }
              });
              console.log('step 2: set offer created answer and updated answer');
            }
            if (data && data[`iceGatheringComplete_for_${myId}`] && data[`iceGatheringComplete_for_${candidateId}`]) {
              // this is use to initiate trying candidate pairs
              await roomRef.update({
                [`${myId}.${candidateId}.try_canditate`]: 0,
                [`${myId}.${candidateId}.iceGatheringComplete_for_${myId}`]: false,
                [`${myId}.${candidateId}.iceGatheringComplete_for_${candidateId}`]: false,
              });        
            }
            if (data && data[`try_canditate`] >= 0 && !data['try_canditate_start'] && !window.connectedCandidates.includes(candidateId)) {
              const candidateIndex = data[`try_canditate`];
              const iceCandidate = data[`candidate_for_${myId}`][candidateIndex];  
              if (iceCandidate) {
                const candidate = new RTCIceCandidate(iceCandidate);
                await RTCPeerConnections[candidateId].addIceCandidate(candidate);
                console.log('tried ', candidateIndex);
              }
              await roomRef.update({
                [`${myId}.${candidateId}.try_canditate_start`]: true
              }); 
            }
          }
        }
        // search answer, consume answer and setRemoteDescription
        for (const candidateId of Object.keys(RTCPeerConnections)) {
          const connection = RTCPeerConnections[candidateId];
          const data = snapshot.data()[candidateId][myId];
          if (!connection.currentRemoteDescription && data && data.answer) {
            const answer = new RTCSessionDescription(data.answer);
            await connection.setRemoteDescription(answer);
            console.log('Step 3: Got the answer and set the answer to remote');
          }
          if ( data && data[`try_canditate_start`] && !window.connectedCandidates.includes(candidateId)) {
            const candidateIndex = data[`try_canditate`];
            const iceCandidates = data[`candidate_for_${candidateId}`] || [];
            for (const iceCandidate of iceCandidates) {
              if (!window.connectedCandidates.includes(candidateId) && iceCandidate) {
                const candidate = new RTCIceCandidate(iceCandidate);
                await connection.addIceCandidate(candidate);
                console.log('tried ', candidateIndex);
              }
            }
            if (!window.connectedCandidates.includes(candidateId) && candidateIndex < data[`candidate_for_${myId}`].length) {
              await roomRef.update({
                [`${candidateId}.${myId}.try_canditate`]: candidateIndex + 1,
                [`${candidateId}.${myId}.try_canditate_start`]: false
              }); 
            }
          }
        }
      }
    });
  }
  init();
  return (
    <div id="room">
      <video id="localVideo" muted autoPlay playsInline style={{width: '100%', maxWidth: '500px'}}></video>
    </div>
  );
}