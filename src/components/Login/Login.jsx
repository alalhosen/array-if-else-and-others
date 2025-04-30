import React from 'react';

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