const appendVideo = (remoteStream) => {
  const remoteVideo = document.createElement ("video");
  remoteVideo.style = "width: 100%;max-width:500px;"
  remoteVideo.playsInline = true;
  remoteVideo.autoplay = true;
  remoteVideo.muted=true;
  remoteVideo.srcObject = remoteStream;
  document.getElementById('room').appendChild(remoteVideo);
}

export default appendVideo;