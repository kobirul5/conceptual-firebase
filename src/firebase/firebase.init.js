// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA99j0lmtoKw_iF59SBYnPUUFGZmmN8Ffs",
  authDomain: "conceptual-second.firebaseapp.com",
  projectId: "conceptual-second",
  storageBucket: "conceptual-second.firebasestorage.app",
  messagingSenderId: "847727318511",
  appId: "1:847727318511:web:08cf3666f372c39bb3521a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth