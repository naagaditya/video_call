import appendVideo from './appendVideo'
const configuration = {"iceServers":[{"urls":["stun:turn2.l.google.com"]}]};

const createNewConnection = (localStream) => {
  const connection = new RTCPeerConnection(configuration);
  localStream && localStream.getTracks().forEach(track => {
    console.log('adding track in connection');
    connection.addTrack(track, localStream);
  });
  const remoteStream = new MediaStream();
  const sendChannel = connection.createDataChannel("sendChannel");
  sendChannel.onopen = e => {
    console.log("open!!!!");
    appendVideo(remoteStream);
  };
  connection.ontrack = event => {
    event.streams[0].getTracks().forEach(track => {
      remoteStream.addTrack(track);
    });
  }
  return connection;
}
export default createNewConnection;