import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import auth from "../../firebase/firebase.init";

const provider = new GoogleAuthProvider();

const handleGoogleSignIn = () => {
  console.log(auth,provider)
  signInWithPopup(auth, provider)
    .then((resut) => {
      console.log(resut);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
};

const Login = () => {
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with google</button>
    </div>
  );
};

export default Login;
