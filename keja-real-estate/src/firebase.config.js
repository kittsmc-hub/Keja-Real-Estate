import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASlIOHRHFc06JUSvYw3Tal-_nL2iuoS5c",
  authDomain: "keja-real-estate.firebaseapp.com",
  projectId: "keja-real-estate",
  storageBucket: "keja-real-estate.appspot.com",
  messagingSenderId: "626784543182",
  appId: "1:626784543182:web:596b5f7f2546d669034b9f"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore();