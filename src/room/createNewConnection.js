import appendVideo from './appendVideo'
const configuration = {"iceServers":[{"urls":["stun:turn2.l.google.com"]}]};

const createNewConnection = (localStream, candidateId) => {
  const connection = new RTCPeerConnection(configuration);
  localStream && localStream.getTracks().forEach(track => {
    console.log('adding track in connection');
    connection.addTrack(track, localStream);
  });
  const remoteStream = new MediaStream();
  const sendChannel = connection.createDataChannel("sendChannel");
  sendChannel.onopen = e => {
    console.log("open!!!!", candidateId);
    window.connectedCandidates.push(`${candidateId}`);
    appendVideo(remoteStream, candidateId);
  };
  sendChannel.onclose = e => {
    console.log("close!!!!", candidateId);
    const indexToRemove = window.connectedCandidates.indexOf(`${candidateId}`);
    window.connectedCandidates.splice(indexToRemove, 1);
    document.getElementById(`video${candidateId}`).remove();
  }
  connection.ontrack = event => {
    event.streams[0].getTracks().forEach(track => {
      remoteStream.addTrack(track);
    });
  }
  window.myConnection = connection;
  return connection;
}
export default createNewConnection;