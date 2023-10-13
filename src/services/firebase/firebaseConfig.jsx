import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAW-aFD__W_LukuKjZnJqwsXYTMslmJ534",
  authDomain: "blasantoniozamora-react.firebaseapp.com",
  projectId: "blasantoniozamora-react",
  storageBucket: "blasantoniozamora-react.appspot.com",
  messagingSenderId: "61348048006",
  appId: "1:61348048006:web:abcd02ff38bc57da8fb507",
  measurementId: "G-6T3B6P4WH6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 