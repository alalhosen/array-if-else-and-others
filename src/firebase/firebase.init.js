// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY9n06sOjmhEZ4UZROm9wSQeeny4OdWfE",
  authDomain: "simple-firebase-02-22ffe.firebaseapp.com",
  projectId: "simple-firebase-02-22ffe",
  storageBucket: "simple-firebase-02-22ffe.firebasestorage.app",
  messagingSenderId: "667641682644",
  appId: "1:667641682644:web:ce95215c7de06b960cf941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)