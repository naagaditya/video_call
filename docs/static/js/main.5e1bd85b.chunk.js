(this.webpackJsonpvideo_call=this.webpackJsonpvideo_call||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),r=n(20),o=n.n(r),i=(n(26),n(5)),s=n.n(i),d=n(10),u=n(37),f=(n(28),n(29),n(21)),p=n(9),l=n(14);l.a.initializeApp({apiKey:"AIzaSyDdzhAHhMQeAo4egpTbj3K-JiuV_InAFkU",authDomain:"fir-rtc-8e4b2.firebaseapp.com",databaseURL:"https://fir-rtc-8e4b2.firebaseio.com",projectId:"fir-rtc-8e4b2",storageBucket:"fir-rtc-8e4b2.appspot.com",messagingSenderId:"159303557727",appId:"1:159303557727:web:2ae59edac452b77736b1ea",measurementId:"G-FWJYK5VF1B"});var b=l.a.firestore(),w=function(e,t){var n=document.createElement("video");n.id="video".concat(t),n.style="width: 100%;max-width:500px;",n.playsInline=!0,n.autoplay=!0,n.srcObject=e,document.getElementById("room").appendChild(n)},x={iceServers:[{urls:["stun:turn2.l.google.com"]}]},h=function(e,t){var n=new RTCPeerConnection(x);e&&e.getTracks().forEach((function(t){console.log("adding track in connection"),n.addTrack(t,e)}));var a=new MediaStream,c=n.createDataChannel("sendChannel");return c.onopen=function(e){console.log("open!!!!",t),window.connectedCandidates.push("".concat(t)),w(a,t)},c.onclose=function(e){console.log("close!!!!",t);var n=window.connectedCandidates.indexOf("".concat(t));window.connectedCandidates.splice(n,1),document.getElementById("video".concat(t)).remove()},n.ontrack=function(e){e.streams[0].getTracks().forEach((function(e){a.addTrack(e)}))},n.onconnectionstatechange=function(e){console.log(n.connectionState),n.connectionState},window.myConnection=n,n},v=n(11);function m(){var e;window.connectedCandidates=[],function(){var t=Object(d.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:e=t.sent,document.querySelector("#localVideo").srcObject=e;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()();var t=window.location.search.split("=")[1],n=b.collection("rooms").doc("".concat(t)),c={},r=0;Object(a.useEffect)((function(){window.addEventListener("beforeunload",function(){var e=Object(d.a)(s.a.mark((function e(t){var a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.returnValue="",a=0,o=Object.keys(c);case 3:if(!(a<o.length)){e.next=11;break}return i=o[a],c[i].close(),e.next=8,n.update(Object(p.a)({},"".concat(i,".").concat(r),l.a.firestore.FieldValue.delete()));case 8:a++,e.next=3;break;case 11:return e.next=13,n.update(Object(p.a)({},r,l.a.firestore.FieldValue.delete()));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var o=function(){var t=Object(d.a)(s.a.mark((function t(a){var o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=h(e,a),c[a]=o,o.onicecandidate=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.candidate){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(a,".").concat(r,".candidate_for_").concat(a),l.a.firestore.FieldValue.arrayUnion(t.candidate.toJSON())));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.onicegatheringstatechange=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("complete"!==t.target.iceGatheringState||window.connectedCandidates.includes(a)){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(a,".").concat(r,".iceGatheringComplete_for_").concat(r),!0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.onicecandidateerror=function(e){console.log(e.errorText)},t.next=7,o.createOffer();case 7:return i=t.sent,t.next=10,n.update(Object(p.a)({},"".concat(a,".").concat(r),{offer:{type:i.type,sdp:i.sdp}}));case 10:o.setLocalDescription(i),console.log("step 1: offer created and updated");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(r,".").concat(a,".candidate_for_").concat(a),l.a.firestore.FieldValue.arrayUnion(t.toJSON())));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("complete"!==t||window.connectedCandidates.includes(a)){e.next=3;break}return e.next=3,n.update(Object(p.a)({},"".concat(r,".").concat(a,".iceGatheringComplete_for_").concat(r),!0));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function w(e){return new Promise((function(t){setInterval((function(){"connected"!==e.connectionState&&"failed"!==e.connectionState||t("con.connectionState")}),500)}))}return function(){var t=Object(d.a)(s.a.mark((function t(){var a,l,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get();case 2:return a=t.sent,l=a.exists&&a.data(),(b=parseInt(Object.keys(l).length))&&(r=parseInt(Object.keys(l)[b-1])+1,Object.keys(a.data()).forEach(o)),t.next=8,n.update(Object(p.a)({},r,{}));case 8:n.onSnapshot(function(){var t=Object(d.a)(s.a.mark((function t(a){var o,d,l,b,x,v,m,j,k,g,O,y,_,C,S,I,D,T;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a||!a.data()){t.next=52;break}o=a.data()[r],d=s.a.mark((function t(){var a,d,f,w,x,v,m,j,k,g;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=b[l],window.connectedCandidates.includes(a)){t.next=33;break}if(!(d=o[a])||!d.offer||c[a]){t.next=20;break}return f=d.offer,w=h(e,a),c[a]=w,w.onicecandidate=function(e){i(e.candidate,a)},w.onicegatheringstatechange=function(e){u(e.target.iceGatheringState,a)},x=new RTCSessionDescription(f),t.next=12,w.setRemoteDescription(x);case 12:return t.next=14,w.createAnswer();case 14:return v=t.sent,t.next=17,w.setLocalDescription(v);case 17:return t.next=19,n.update(Object(p.a)({},"".concat(r,".").concat(a),{answer:{type:v.type,sdp:v.sdp}}));case 19:console.log("step 2: set offer created answer and updated answer");case 20:if(!(d&&d["iceGatheringComplete_for_".concat(r)]&&d["iceGatheringComplete_for_".concat(a)])){t.next=23;break}return t.next=23,n.update((m={},Object(p.a)(m,"".concat(r,".").concat(a,".try_canditate"),0),Object(p.a)(m,"".concat(r,".").concat(a,".iceGatheringComplete_for_").concat(r),!1),Object(p.a)(m,"".concat(r,".").concat(a,".iceGatheringComplete_for_").concat(a),!1),m));case 23:if(!(d&&d.try_canditate>=0)||d.try_canditate_start||window.connectedCandidates.includes(a)){t.next=33;break}if(j=d.try_canditate,!(k=d["candidate_for_".concat(r)][j])){t.next=31;break}return g=new RTCIceCandidate(k),t.next=30,c[a].addIceCandidate(g);case 30:console.log("tried ",j,c[a].connectionState);case 31:return t.next=33,n.update(Object(p.a)({},"".concat(r,".").concat(a,".try_canditate_start"),!0));case 33:case"end":return t.stop()}}),t)})),l=0,b=Object.keys(o);case 4:if(!(l<b.length)){t.next=9;break}return t.delegateYield(d(),"t0",6);case 6:l++,t.next=4;break;case 9:x=0,v=Object.keys(c);case 10:if(!(x<v.length)){t.next=52;break}if(m=v[x],j=c[m],k=a.data()[m][r],j.currentRemoteDescription||!k||!k.answer){t.next=19;break}return g=new RTCSessionDescription(k.answer),t.next=18,j.setRemoteDescription(g);case 18:console.log("Step 3: Got the answer and set the answer to remote");case 19:if(!k||!k.try_canditate_start||window.connectedCandidates.includes(m)){t.next=49;break}O=k.try_canditate,y=k["candidate_for_".concat(r)]||[],_=Object(f.a)(y),t.prev=23,_.s();case 25:if((C=_.n()).done){t.next=38;break}if(S=C.value,window.connectedCandidates.includes(m)||!S){t.next=36;break}return I=new RTCIceCandidate(S),t.next=31,j.addIceCandidate(I);case 31:return console.log("tried ",O),t.next=34,w(j);case 34:D=t.sent,console.log(D,j.connectionState);case 36:t.next=25;break;case 38:t.next=43;break;case 40:t.prev=40,t.t1=t.catch(23),_.e(t.t1);case 43:return t.prev=43,_.f(),t.finish(43);case 46:if(window.connectedCandidates.includes(m)||!(O+1<k["candidate_for_".concat(m)].length)){t.next=49;break}return t.next=49,n.update((T={},Object(p.a)(T,"".concat(m,".").concat(r,".try_canditate"),O+1),Object(p.a)(T,"".concat(m,".").concat(r,".try_canditate_start"),!1),T));case 49:x++,t.next=10;break;case 52:case"end":return t.stop()}}),t,null,[[23,40,43,46]])})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),Object(v.jsx)("div",{id:"room",children:Object(v.jsx)("video",{id:"localVideo",muted:!0,autoPlay:!0,playsInline:!0,style:{width:"100%",maxWidth:"500px"}})})}var j=function(){if(window.location.search.split("=")[1])return Object(v.jsx)(m,{});var e=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("rooms").add({});case 2:t=e.sent,window.location.href="".concat(window.location.href,"?roomId=").concat(t.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(u.a,{variant:"primary",onClick:e,children:"Create Room \u2192"})})};o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(j,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5e1bd85b.chunk.js.map