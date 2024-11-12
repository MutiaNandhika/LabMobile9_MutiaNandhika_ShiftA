// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgKy58bPRsytzthqTvtk859YjkTYpSYSE",
    authDomain: "vue-firebase-39301.firebaseapp.com",
    projectId: "vue-firebase-39301",
    storageBucket: "vue-firebase-39301.firebasestorage.app",
    messagingSenderId: "845329380497",
    appId: "1:845329380497:web:a45e4b2bcb5f280016fb30"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };