// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8a7pmjnRNtg1yXVzqCHt61F9vcjNF58k",
  authDomain: "simple-firebase-02-d3329.firebaseapp.com",
  projectId: "simple-firebase-02-d3329",
  storageBucket: "simple-firebase-02-d3329.firebasestorage.app",
  messagingSenderId: "921309182571",
  appId: "1:921309182571:web:8b92d7c3af37d1d43a0f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = gitAuth(app)