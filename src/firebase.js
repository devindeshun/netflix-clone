import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAxavCRlfLE5_EXGq5WMtTt5AU9E4gHWQ",
    authDomain: "netflix-clone-1d657.firebaseapp.com",
    projectId: "netflix-clone-1d657",
    storageBucket: "netflix-clone-1d657.appspot.com",
    messagingSenderId: "902428877338",
    appId: "1:902428877338:web:d58b95b5ca272fc3b327a3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;