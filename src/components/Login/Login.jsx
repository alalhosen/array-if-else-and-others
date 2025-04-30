import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import React from 'react';

const provider=new GoogleAuthProvider();
const handleGoogleSignIn =()=>{
    console.log('comming soon google')
}

const Login = () => {
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with google</button>
        </div>
    );
};

export default Login;