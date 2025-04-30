1 //Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdmATDUrofCTjq57KeBcZYhu-eAIOgJYA",
  authDomain: "array-if-else-and-others.firebaseapp.com",
  projectId: "array-if-else-and-others",
  storageBucket: "array-if-else-and-others.firebasestorage.app",
  messagingSenderId: "557185373581",
  appId: "1:557185373581:web:8409c542463298cd7299c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;