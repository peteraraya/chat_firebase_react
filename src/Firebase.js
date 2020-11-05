import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBL86C7o8zRMgMvwXivlXRODs6uacOKDto",
    authDomain: "chat-real-time-ed406.firebaseapp.com",
    databaseURL: "https://chat-real-time-ed406.firebaseio.com",
    projectId: "chat-real-time-ed406",
    storageBucket: "chat-real-time-ed406.appspot.com",
    messagingSenderId: "318014613429",
    appId: "1:318014613429:web:54eca842a7701b97d5dbfc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db ,auth,provider }

