import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGvnnVwZI4Bwov7N43lwAvg9ePyJhPMr8",
  authDomain: "martuluvtp26242-p2.firebaseapp.com",
  projectId: "martuluvtp26242-p2",
  storageBucket: "martuluvtp26242-p2.firebasestorage.app",
  messagingSenderId: "994031410074",
  appId: "1:994031410074:web:b64f6e7ce069c3a0fe3823",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login de usuarios
const auth = getAuth(app);

export { db, auth };
