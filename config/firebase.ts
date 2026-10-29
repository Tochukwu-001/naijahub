// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "naijahub-723f9.firebaseapp.com",
  projectId: "naijahub-723f9",
  storageBucket: "naijahub-723f9.firebasestorage.app",
  messagingSenderId: "297969239975",
  appId: "1:297969239975:web:f151797b024bf6d05d5882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
