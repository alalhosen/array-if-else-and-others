import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React from "react";
import auth from "../../firebase/firebase.init";

const provider = new GoogleAuthProvider();
const handleGoogleSignIn = () => {
  signInWithPopup(auth)
};

const Login = () => {
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with google</button>
    </div>
  );
};

export default Login;
