// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAacGWDZkJ_bPtc4WWYUpA7e8LOsCwRIzg",
  authDomain: "kish-d848e.firebaseapp.com",
  projectId: "kish-d848e",
  storageBucket: "kish-d848e.appspot.com",
  messagingSenderId: "456068247186",
  appId: "1:456068247186:web:4883c4abf6ee375634804b",
  measurementId: "G-MPRRW36WDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }