import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'
const Login = () => {
    const signIn =()=>{
        //sign in
    }

    return (
        <div className='login'>
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/1920px-Discord_logo.svg.png" alt="" />
            </div>
            <Button onClick={signIn}>Sing In</Button>
        </div>
    );
};

export default Login;