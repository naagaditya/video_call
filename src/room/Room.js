import React from 'react';
import db from '../firebase.config';
const configuration = {"iceServers":[{"urls":["stun:turn2.l.google.com"]}]};

export default function Room() {
  let localStream, remoteStream;
  const openUserMedia = async () => {
    localStream = await navigator.mediaDevices.getUserMedia(
      {video: true, audio: true});
    document.querySelector('#localVideo').srcObject = localStream;
    remoteStream = new MediaStream();
    document.querySelector('#remoteVideo').srcObject = remoteStream;
  }
  openUserMedia();
  const roomId = window.location.search.split('=')[1];
  const roomRef = db.collection('rooms').doc(`${roomId}`);
  const remoteStreams = {};
  const RTCPeerConnections = {};
  let myId = 0;
  const createConnection = async (candidateId) => {
    const connection = new RTCPeerConnection(configuration);
    const sendChannel = connection.createDataChannel("sendChannel");
    sendChannel.onopen = e => console.log("open!!!!");
    RTCPeerConnections[candidateId] = connection;
    remoteStreams[candidateId] = new MediaStream();
    // document.querySelector('#remoteVideo').srcObject = remoteStreams[candidateId];
    connection.ontrack = event => {
      event.streams[0].getTracks().forEach(track => {
        remoteStreams[candidateId].addTrack(track);
        remoteStream.addTrack(track);
      });
    }
    localStream.getTracks().forEach(track => {
      console.log('adding track in connection');
      connection.addTrack(track, localStream);
    });
    connection.onicecandidate = async e =>  {
      console.log(" NEW ice candidate!! ", e.candidate );
      if (e.candidate) {
        await roomRef.update({
          [`${candidateId}.${myId}.candidate_for_${myId}`]: e.candidate.toJSON()
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
      // search offer, consume offer and create answer
      const myDataConnections = snapshot.data()[myId];
      Object.keys(myDataConnections).forEach(async candidateId => {
        const data = myDataConnections[candidateId];
        if (data && data.offer && !RTCPeerConnections[candidateId]) {
          const offer = data.offer;
          const connection = new RTCPeerConnection(configuration);
          const sendChannel = connection.createDataChannel("sendChannel");
          sendChannel.onopen = e => console.log("open!!!!");
          RTCPeerConnections[candidateId] = connection;
          remoteStreams[candidateId] = new MediaStream();
          // document.querySelector('#remoteVideo').srcObject = remoteStreams[candidateId];
          connection.ontrack = event => {
            event.streams[0].getTracks().forEach(track => {
              remoteStreams[candidateId].addTrack(track);
              remoteStream.addTrack(track);
            });
          }
          localStream.getTracks().forEach(track => {
            console.log('adding track in connection');
            connection.addTrack(track, localStream);
          });
          connection.onicecandidate = async e =>  {
            console.log(" NEW ice candidate!! ", e.candidate );
            if (e.candidate) {
              await roomRef.update({
                [`${myId}.${candidateId}.candidate_for_${myId}`]: e.candidate.toJSON()
              });
            }
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
        if ( data && data[`candidate_for_${myId}`]) {
          const candidate = new RTCIceCandidate(data[`candidate_for_${myId}`]);
          await RTCPeerConnections[candidateId].addIceCandidate(candidate);
          // console.log('recieve candidate and added');
          // console.log('state => ', RTCPeerConnections[candidateId].connectionState);
        }
      });
      // search answer, consume answer and setRemoteDescription
      Object.keys(RTCPeerConnections).forEach(async candidateId => {
        const connection = RTCPeerConnections[candidateId];
        const data = snapshot.data()[candidateId][myId];
        if (!connection.currentRemoteDescription && data && data.answer) {
          const answer = new RTCSessionDescription(data.answer);
          await connection.setRemoteDescription(answer);
          console.log('Step 3: Got the answer and set the answer to remote');
        }
        if ( data && data[`candidate_for_${candidateId}`]) {
          const candidate = new RTCIceCandidate(data[`candidate_for_${candidateId}`]);
          await connection.addIceCandidate(candidate);
          // console.log('recieve candidate and added');
          // console.log('state => ', connection.connectionState);
        }
      });
    });
  }
  init();
  return (
    <div>
      <video id="localVideo" muted autoPlay playsInline></video>
      <video id="remoteVideo" autoPlay playsInline></video>
    </div>
  );
}