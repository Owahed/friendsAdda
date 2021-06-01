import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import logo from './logo-2.png';
import './Login.css'
const Login = () => {
    const signIn = () => {
        //sign in
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));
    };

return (
    <div className='login'>
        <div className="login_logo">
            <img src={logo} alt="" />
        </div>
        <Button onClick={signIn}>Sing In</Button>
    </div>
);
};


export default Login;