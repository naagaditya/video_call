(this.webpackJsonpvideo_call=this.webpackJsonpvideo_call||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),r=n(20),o=n.n(r),i=(n(26),n(5)),s=n.n(i),d=n(10),u=n(37),f=(n(28),n(29),n(21)),p=n(9),l=n(14);l.a.initializeApp({apiKey:"AIzaSyDdzhAHhMQeAo4egpTbj3K-JiuV_InAFkU",authDomain:"fir-rtc-8e4b2.firebaseapp.com",databaseURL:"https://fir-rtc-8e4b2.firebaseio.com",projectId:"fir-rtc-8e4b2",storageBucket:"fir-rtc-8e4b2.appspot.com",messagingSenderId:"159303557727",appId:"1:159303557727:web:2ae59edac452b77736b1ea",measurementId:"G-FWJYK5VF1B"});var b=l.a.firestore(),w=function(e,t){var n=document.createElement("video");n.id="video".concat(t),n.style="width: 100%;max-width:500px;",n.playsInline=!0,n.autoplay=!0,n.srcObject=e,document.getElementById("room").appendChild(n)},x={iceServers:[{urls:["stun:turn2.l.google.com"]}]},h=function(e,t){var n=new RTCPeerConnection(x);e&&e.getTracks().forEach((function(t){console.log("adding track in connection"),n.addTrack(t,e)}));var a=new MediaStream,c=n.createDataChannel("sendChannel");return c.onopen=function(e){console.log("open!!!!",t),window.connectedCandidates.push("".concat(t)),w(a,t)},c.onclose=function(e){console.log("close!!!!",t);var n=window.connectedCandidates.indexOf("".concat(t));window.connectedCandidates.splice(n,1),document.getElementById("video".concat(t)).remove()},n.ontrack=function(e){e.streams[0].getTracks().forEach((function(e){a.addTrack(e)}))},n},v=n(11);function m(){var e;window.connectedCandidates=[],function(){var t=Object(d.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:e=t.sent,document.querySelector("#localVideo").srcObject=e;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()();var t=window.location.search.split("=")[1],n=b.collection("rooms").doc("".concat(t)),c={},r=0;Object(a.useEffect)((function(){window.addEventListener("beforeunload",function(){var e=Object(d.a)(s.a.mark((function e(t){var a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.returnValue="",a=0,o=Object.keys(c);case 3:if(!(a<o.length)){e.next=11;break}return i=o[a],c[i].close(),e.next=8,n.update(Object(p.a)({},"".concat(i,".").concat(r),l.a.firestore.FieldValue.delete()));case 8:a++,e.next=3;break;case 11:return e.next=13,n.update(Object(p.a)({},r,l.a.firestore.FieldValue.delete()));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var o=function(){var t=Object(d.a)(s.a.mark((function t(a){var o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=h(e,a),c[a]=o,o.onicecandidate=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.candidate){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(a,".").concat(r,".candidate_for_").concat(a),l.a.firestore.FieldValue.arrayUnion(t.candidate.toJSON())));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.onicegatheringstatechange=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("complete"!==t.target.iceGatheringState||window.connectedCandidates.includes(a)){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(a,".").concat(r,".iceGatheringComplete_for_").concat(r),!0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.onicecandidateerror=function(e){console.log(e.errorText)},t.next=7,o.createOffer();case 7:return i=t.sent,t.next=10,n.update(Object(p.a)({},"".concat(a,".").concat(r),{offer:{type:i.type,sdp:i.sdp}}));case 10:o.setLocalDescription(i),console.log("step 1: offer created and updated");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(r,".").concat(a,".candidate_for_").concat(a),l.a.firestore.FieldValue.arrayUnion(t.toJSON())));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("complete"!==t||window.connectedCandidates.includes(a)){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(r,".").concat(a,".iceGatheringComplete_for_").concat(r),!0));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return function(){var t=Object(d.a)(s.a.mark((function t(){var a,l,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get();case 2:return a=t.sent,l=a.exists&&a.data(),(b=parseInt(Object.keys(l).length))&&(r=parseInt(Object.keys(l)[b-1])+1,Object.keys(a.data()).forEach(o)),t.next=8,n.update(Object(p.a)({},r,{}));case 8:n.onSnapshot(function(){var t=Object(d.a)(s.a.mark((function t(a){var o,d,l,b,w,x,v,m,j,k,g,O,y,_,C,I,S;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a||!a.data()){t.next=48;break}o=a.data()[r],d=s.a.mark((function t(){var a,d,f,w,x,v,m,j,k,g;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=b[l],window.connectedCandidates.includes(a)){t.next=33;break}if(!(d=o[a])||!d.offer||c[a]){t.next=20;break}return f=d.offer,w=h(e,a),c[a]=w,w.onicecandidate=function(e){i(e.candidate,a)},w.onicegatheringstatechange=function(e){u(e.target.iceGatheringState,a)},x=new RTCSessionDescription(f),t.next=12,w.setRemoteDescription(x);case 12:return t.next=14,w.createAnswer();case 14:return v=t.sent,t.next=17,w.setLocalDescription(v);case 17:return t.next=19,n.update(Object(p.a)({},"".concat(r,".").concat(a),{answer:{type:v.type,sdp:v.sdp}}));case 19:console.log("step 2: set offer created answer and updated answer");case 20:if(!(d&&d["iceGatheringComplete_for_".concat(r)]&&d["iceGatheringComplete_for_".concat(a)])){t.next=23;break}return t.next=23,n.update((m={},Object(p.a)(m,"".concat(r,".").concat(a,".try_canditate"),0),Object(p.a)(m,"".concat(r,".").concat(a,".iceGatheringComplete_for_").concat(r),!1),Object(p.a)(m,"".concat(r,".").concat(a,".iceGatheringComplete_for_").concat(a),!1),m));case 23:if(!(d&&d.try_canditate>=0)||d.try_canditate_start||window.connectedCandidates.includes(a)){t.next=33;break}if(j=d.try_canditate,!(k=d["candidate_for_".concat(r)][j])){t.next=31;break}return g=new RTCIceCandidate(k),t.next=30,c[a].addIceCandidate(g);case 30:console.log("tried ",j);case 31:return t.next=33,n.update(Object(p.a)({},"".concat(r,".").concat(a,".try_canditate_start"),!0));case 33:case"end":return t.stop()}}),t)})),l=0,b=Object.keys(o);case 4:if(!(l<b.length)){t.next=9;break}return t.delegateYield(d(),"t0",6);case 6:l++,t.next=4;break;case 9:w=0,x=Object.keys(c);case 10:if(!(w<x.length)){t.next=48;break}if(v=x[w],m=c[v],j=a.data()[v][r],m.currentRemoteDescription||!j||!j.answer){t.next=19;break}return k=new RTCSessionDescription(j.answer),t.next=18,m.setRemoteDescription(k);case 18:console.log("Step 3: Got the answer and set the answer to remote");case 19:if(!j||!j.try_canditate_start||window.connectedCandidates.includes(v)){t.next=45;break}g=j.try_canditate,O=j["candidate_for_".concat(r)]||[],y=Object(f.a)(O),t.prev=23,y.s();case 25:if((_=y.n()).done){t.next=34;break}if(C=_.value,window.connectedCandidates.includes(v)||!C){t.next=32;break}return I=new RTCIceCandidate(C),t.next=31,m.addIceCandidate(I);case 31:console.log("tried ",g);case 32:t.next=25;break;case 34:t.next=39;break;case 36:t.prev=36,t.t1=t.catch(23),y.e(t.t1);case 39:return t.prev=39,y.f(),t.finish(39);case 42:if(window.connectedCandidates.includes(v)||!(g<j["candidate_for_".concat(v)].length)){t.next=45;break}return t.next=45,n.update((S={},Object(p.a)(S,"".concat(v,".").concat(r,".try_canditate"),g+1),Object(p.a)(S,"".concat(v,".").concat(r,".try_canditate_start"),!1),S));case 45:w++,t.next=10;break;case 48:case"end":return t.stop()}}),t,null,[[23,36,39,42]])})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(v.jsx)("div",{id:"room",children:Object(v.jsx)("video",{id:"localVideo",muted:!0,autoPlay:!0,playsInline:!0,style:{width:"100%",maxWidth:"500px"}})})}var j=function(){if(window.location.search.split("=")[1])return Object(v.jsx)(m,{});var e=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("rooms").add({});case 2:t=e.sent,window.location.href="".concat(window.location.href,"?roomId=").concat(t.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(u.a,{variant:"primary",onClick:e,children:"Create Room \u2192"})})};o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(j,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d7d2e378.chunk.js.map