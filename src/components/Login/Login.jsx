import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) =>{
      console.log(result.user);
      setUser(result.user)
    });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  // if user exists ? signOut : sing in

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Login with google</button>
          <button onClick={handleGithubSignIn}>Login with github</button>
        </div>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
