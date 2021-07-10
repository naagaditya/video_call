const appendVideo = (remoteStream) => {
  const remoteVideo = document.createElement ("video");
  remoteVideo.playsInline = true;
  remoteVideo.autoplay = true;
  remoteVideo.srcObject = remoteStream;
  document.getElementById('room').appendChild(remoteVideo);
}

export default appendVideo;