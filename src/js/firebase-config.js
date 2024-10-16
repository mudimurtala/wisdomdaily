import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBMp-8i3BRb391rsJIX_paUDRo8Oz3scH0",
  authDomain: "my-portfolio-project-5e8d0.firebaseapp.com",
  projectId: "my-portfolio-project-5e8d0",
  storageBucket: "my-portfolio-project-5e8d0.appspot.com",
  messagingSenderId: "828652580713",
  appId: "1:828652580713:web:3495b4e851e3d198b417f8",
  measurementId: "G-T3H1D37E09"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { firebaseConfig, app, analytics, auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };