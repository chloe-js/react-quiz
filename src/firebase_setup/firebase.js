import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC2rTi_H4vslUEHXl_mlHn7w1LED3Gvuvc",
  authDomain: "quiz-react1.firebaseapp.com",
  projectId: "quiz-react1",
  storageBucket: "quiz-react1.appspot.com",
  messagingSenderId: "840380124673",
  appId: "1:840380124673:web:2a4c8dc4bcf32634b87a00",
  measurementId: "G-GV67QP4ZLP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db } 
