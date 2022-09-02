// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARC6Ke8uohRa_pzfmyTihFyGa6lbjIc58",
  authDomain: "netflix-91f3b.firebaseapp.com",
  projectId: "netflix-91f3b",
  storageBucket: "netflix-91f3b.appspot.com",
  messagingSenderId: "244442400177",
  appId: "1:244442400177:web:50db772b1a974851d36990",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
