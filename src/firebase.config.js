// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkl8wKJy_COjL53T70Ggy5Dx3frJb52rQ",
  authDomain: "final-task-72dc9.firebaseapp.com",
  projectId: "final-task-72dc9",
  storageBucket: "final-task-72dc9.appspot.com",
  messagingSenderId: "347822527518",
  appId: "1:347822527518:web:fd76b9bd1cadcf912c8a0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
