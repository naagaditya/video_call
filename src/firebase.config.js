import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDdzhAHhMQeAo4egpTbj3K-JiuV_InAFkU",
    authDomain: "fir-rtc-8e4b2.firebaseapp.com",
    databaseURL: "https://fir-rtc-8e4b2.firebaseio.com",
    projectId: "fir-rtc-8e4b2",
    storageBucket: "fir-rtc-8e4b2.appspot.com",
    messagingSenderId: "159303557727",
    appId: "1:159303557727:web:2ae59edac452b77736b1ea",
    measurementId: "G-FWJYK5VF1B"
  };
  firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();

export default db;