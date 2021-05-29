import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDBbK6Sz3HyC-f5wjep0MxzLyNaF1tWLJo",
    authDomain: "discord-group-2c7c1.firebaseapp.com",
    projectId: "discord-group-2c7c1",
    storageBucket: "discord-group-2c7c1.appspot.com",
    messagingSenderId: "1038723333689",
    appId: "1:1038723333689:web:bdba1a035f6749631117e8",
    measurementId: "G-NLNERL5W8P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;