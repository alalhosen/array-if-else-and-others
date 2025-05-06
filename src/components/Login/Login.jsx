import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";


const Login = () => {

const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login with google</button>
    </div>
  );
};

export default Login;
