import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAHPTyFnk8bpyM-E7VPGTRRGtzk-0VPsx0",
    authDomain: "alsnap-d48f0.firebaseapp.com",
    projectId: "alsnap-d48f0",
    storageBucket: "alsnap-d48f0.appspot.com",
    messagingSenderId: "143558868992",
    appId: "1:143558868992:web:7bd227bce695a01f92d8e5",
    measurementId: "G-GH3N3CZK3H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };