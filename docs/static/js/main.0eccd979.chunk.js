(this.webpackJsonpvideo_call=this.webpackJsonpvideo_call||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(20),o=n.n(c),i=(n(25),n(5)),s=n.n(i),u=n(9),d=n(36),p=(n(27),n(28),n(14)),f=n(13);f.a.initializeApp({apiKey:"AIzaSyDdzhAHhMQeAo4egpTbj3K-JiuV_InAFkU",authDomain:"fir-rtc-8e4b2.firebaseapp.com",databaseURL:"https://fir-rtc-8e4b2.firebaseio.com",projectId:"fir-rtc-8e4b2",storageBucket:"fir-rtc-8e4b2.appspot.com",messagingSenderId:"159303557727",appId:"1:159303557727:web:2ae59edac452b77736b1ea",measurementId:"G-FWJYK5VF1B"});var l=f.a.firestore(),h=function(e){var t=document.createElement("video");t.style="width: 100%;max-width:500px;",t.playsInline=!0,t.autoplay=!0,t.srcObject=e,document.getElementById("room").appendChild(t)},b={iceServers:[{urls:["stun:turn2.l.google.com"]}]},v=function(e){var t=new RTCPeerConnection(b);e&&e.getTracks().forEach((function(n){console.log("adding track in connection"),t.addTrack(n,e)}));var n=new MediaStream;return t.createDataChannel("sendChannel").onopen=function(e){console.log("open!!!!"),h(n)},t.ontrack=function(e){e.streams[0].getTracks().forEach((function(e){n.addTrack(e)}))},t},w=n(10);function m(){var e;(function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:e=t.sent,document.querySelector("#localVideo").srcObject=e;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()();var t=window.location.search.split("=")[1],n=l.collection("rooms").doc("".concat(t)),a={},r=0,c=function(){var t=Object(u.a)(s.a.mark((function t(c){var o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v(e),a[c]=o,o.onicecandidate=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(" NEW ice candidate!! ",t.candidate),!t.candidate){e.next=4;break}return e.next=4,n.update(Object(p.a)({},"".concat(c,".").concat(r,".candidate_for_").concat(r),f.a.firestore.FieldValue.arrayUnion(t.candidate.toJSON())));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.onicecandidateerror=function(e){console.log(e.errorText)},t.next=6,o.createOffer();case 6:return i=t.sent,t.next=9,n.update(Object(p.a)({},"".concat(c,".").concat(r),{offer:{type:i.type,sdp:i.sdp}}));case 9:o.setLocalDescription(i),console.log("step 1: offer created and updated");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(){var t=Object(u.a)(s.a.mark((function t(){var o,i,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get();case 2:return o=t.sent,i=o.exists&&o.data(),(d=parseInt(Object.keys(i).length))&&(r=parseInt(Object.keys(i)[d-1])+1,Object.keys(o.data()).forEach(c)),t.next=8,n.update(Object(p.a)({},r,{}));case 8:n.onSnapshot(function(){var t=Object(u.a)(s.a.mark((function t(c){var o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=c.data()[r],Object.keys(o).forEach(function(){var t=Object(u.a)(s.a.mark((function t(c){var i,d,l,h,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i=o[c])||!i.offer||a[c]){t.next=17;break}return d=i.offer,l=v(e),a[c]=l,l.onicecandidate=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(" NEW ice candidate!! ",t.candidate),!t.candidate){e.next=4;break}return e.next=4,n.update(Object(p.a)({},"".concat(r,".").concat(c,".candidate_for_").concat(r),f.a.firestore.FieldValue.arrayUnion(t.candidate.toJSON())));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=new RTCSessionDescription(d),t.next=9,l.setRemoteDescription(h);case 9:return t.next=11,l.createAnswer();case 11:return b=t.sent,t.next=14,l.setLocalDescription(b);case 14:return t.next=16,n.update(Object(p.a)({},"".concat(r,".").concat(c),{answer:{type:b.type,sdp:b.sdp}}));case 16:console.log("step 2: set offer created answer and updated answer");case 17:i&&i["candidate_for_".concat(r)]&&i["candidate_for_".concat(r)].some(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connected"!==a[c].connectionState){e.next=2;break}return e.abrupt("return",!0);case 2:return n=new RTCIceCandidate(t),e.next=5,a[c].addIceCandidate(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object.keys(a).forEach(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a[t],o=c.data()[t][r],n.currentRemoteDescription||!o||!o.answer){e.next=7;break}return i=new RTCSessionDescription(o.answer),e.next=6,n.setRemoteDescription(i);case 6:console.log("Step 3: Got the answer and set the answer to remote");case 7:o&&o["candidate_for_".concat(t)]&&o["candidate_for_".concat(t)].some(function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connected"!==n.connectionState){e.next=2;break}return e.abrupt("return",!0);case 2:return a=new RTCIceCandidate(t),e.next=5,n.addIceCandidate(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(w.jsx)("div",{id:"room",children:Object(w.jsx)("video",{id:"localVideo",muted:!0,autoPlay:!0,playsInline:!0,style:{width:"100%",maxWidth:"500px"}})})}var x=function(){if(window.location.search.split("=")[1])return Object(w.jsx)(m,{});var e=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("rooms").add({});case 2:t=e.sent,window.location.href="".concat(window.location.href,"?roomId=").concat(t.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(d.a,{variant:"primary",onClick:e,children:"Create Room \u2192"})})};o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0eccd979.chunk.js.map