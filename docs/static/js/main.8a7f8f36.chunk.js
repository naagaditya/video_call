(this.webpackJsonpvideo_call=this.webpackJsonpvideo_call||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(20),o=n.n(c),i=(n(25),n(5)),s=n.n(i),u=n(9),d=n(36),p=(n(27),n(28),n(10)),f=n(14);f.a.initializeApp({apiKey:"AIzaSyDdzhAHhMQeAo4egpTbj3K-JiuV_InAFkU",authDomain:"fir-rtc-8e4b2.firebaseapp.com",databaseURL:"https://fir-rtc-8e4b2.firebaseio.com",projectId:"fir-rtc-8e4b2",storageBucket:"fir-rtc-8e4b2.appspot.com",messagingSenderId:"159303557727",appId:"1:159303557727:web:2ae59edac452b77736b1ea",measurementId:"G-FWJYK5VF1B"});var l=f.a.firestore(),b=function(e){var t=document.createElement("video");t.style="width: 100%;max-width:500px;",t.playsInline=!0,t.autoplay=!0,t.srcObject=e,document.getElementById("room").appendChild(t)},h={iceServers:[{urls:["stun:turn2.l.google.com"]}]},x=function(e){var t=new RTCPeerConnection(h);e&&e.getTracks().forEach((function(n){console.log("adding track in connection"),t.addTrack(n,e)}));var n=new MediaStream;return t.createDataChannel("sendChannel").onopen=function(e){console.log("open!!!!"),b(n)},t.ontrack=function(e){e.streams[0].getTracks().forEach((function(e){n.addTrack(e)}))},t},m=n(11);function w(){var e;(function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:e=t.sent,document.querySelector("#localVideo").srcObject=e;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()();var t=window.location.search.split("=")[1],n=l.collection("rooms").doc("".concat(t)),a={},r=0,c=function(){var t=Object(u.a)(s.a.mark((function t(c){var o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=x(e),a[c]=o,o.onicecandidate=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.candidate){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(c,".").concat(r,".candidate_for_").concat(r),f.a.firestore.FieldValue.arrayUnion(t.candidate.toJSON())));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.onicegatheringstatechange=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("complete"!==t.target.iceGatheringState||"connected"===o.connectionState){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(c,".").concat(r,".iceGatheringComplete_for_").concat(r),!0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.onicecandidateerror=function(e){console.log(e.errorText)},t.next=7,o.createOffer();case 7:return i=t.sent,t.next=10,n.update(Object(p.a)({},"".concat(c,".").concat(r),{offer:{type:i.type,sdp:i.sdp}}));case 10:o.setLocalDescription(i),console.log("step 1: offer created and updated");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(){var t=Object(u.a)(s.a.mark((function t(){var o,i,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get();case 2:return o=t.sent,i=o.exists&&o.data(),(d=parseInt(Object.keys(i).length))&&(r=parseInt(Object.keys(i)[d-1])+1,Object.keys(o.data()).forEach(c)),t.next=8,n.update(Object(p.a)({},r,{}));case 8:n.onSnapshot(function(){var t=Object(u.a)(s.a.mark((function t(c){var o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=c.data()[r],Object.keys(o).forEach(function(){var t=Object(u.a)(s.a.mark((function t(c){var i,d,l,b,h,m,w,v,j;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a[c]||"connected"!==a[c].connectionState){t.next=2;break}return t.abrupt("return");case 2:if(!(i=o[c])||!i.offer||a[c]){t.next=20;break}return d=i.offer,l=x(e),a[c]=l,l.onicecandidate=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.candidate){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(r,".").concat(c,".candidate_for_").concat(r),f.a.firestore.FieldValue.arrayUnion(t.candidate.toJSON())));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l.onicegatheringstatechange=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("complete"!==t.target.iceGatheringState||"connected"===l.connectionState){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(r,".").concat(c,".iceGatheringComplete_for_").concat(r),!0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=new RTCSessionDescription(d),t.next=12,l.setRemoteDescription(b);case 12:return t.next=14,l.createAnswer();case 14:return h=t.sent,t.next=17,l.setLocalDescription(h);case 17:return t.next=19,n.update(Object(p.a)({},"".concat(r,".").concat(c),{answer:{type:h.type,sdp:h.sdp}}));case 19:console.log("step 2: set offer created answer and updated answer");case 20:if(!(i&&i["iceGatheringComplete_for_".concat(r)]&&i["iceGatheringComplete_for_".concat(c)])){t.next=23;break}return t.next=23,n.update((m={},Object(p.a)(m,"".concat(r,".").concat(c,".try_canditate"),0),Object(p.a)(m,"".concat(r,".").concat(c,".iceGatheringComplete_for_").concat(r),!1),Object(p.a)(m,"".concat(r,".").concat(c,".iceGatheringComplete_for_").concat(c),!1),m));case 23:if(!(i&&i.try_canditate>=0)||i.try_canditate_start){t.next=32;break}if(w=i.try_canditate,!(v=i["candidate_for_".concat(r)][w])){t.next=30;break}return j=new RTCIceCandidate(v),t.next=30,a[c].addIceCandidate(j);case 30:return t.next=32,n.update(Object(p.a)({},"".concat(r,".").concat(c,".try_canditate_start"),!0));case 32:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object.keys(a).forEach(function(){var e=Object(u.a)(s.a.mark((function e(t){var o,i,d,f,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a[t],i=c.data()[t][r],o.currentRemoteDescription||!i||!i.answer){e.next=7;break}return d=new RTCSessionDescription(i.answer),e.next=6,o.setRemoteDescription(d);case 6:console.log("Step 3: Got the answer and set the answer to remote");case 7:if(!i||!i.try_canditate_start){e.next=14;break}if(f=i.try_canditate,(i["candidate_for_".concat(t)]||[]).some(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connected"!==o.connectionState){e.next=3;break}return console.log("connected"),e.abrupt("return",!0);case 3:if(!t){e.next=7;break}return n=new RTCIceCandidate(t),e.next=7,o.addIceCandidate(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),!("connected"!==o.connectionState&&f<i["candidate_for_".concat(r)].length)){e.next=14;break}return e.next=14,n.update((l={},Object(p.a)(l,"".concat(t,".").concat(r,".try_canditate"),f+1),Object(p.a)(l,"".concat(t,".").concat(r,".try_canditate_start"),!1),l));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(m.jsx)("div",{id:"room",children:Object(m.jsx)("video",{id:"localVideo",muted:!0,autoPlay:!0,playsInline:!0,style:{width:"100%",maxWidth:"500px"}})})}var v=function(){if(window.location.search.split("=")[1])return Object(m.jsx)(w,{});var e=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("rooms").add({});case 2:t=e.sent,window.location.href="".concat(window.location.href,"?roomId=").concat(t.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(d.a,{variant:"primary",onClick:e,children:"Create Room \u2192"})})};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8a7f8f36.chunk.js.map