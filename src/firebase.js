import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCv4Og4x11VFsyqduG2SV91MR1AbiyPeKM",
    authDomain: "gearshop-f3e7f.firebaseapp.com",
    projectId: "gearshop-f3e7f",
    storageBucket: "gearshop-f3e7f.appspot.com",
    messagingSenderId: "101212553973",
    appId: "1:101212553973:web:bb2684a552d816b40c7bbc",
    measurementId: "G-01Y4BMNDQV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

