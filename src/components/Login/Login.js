import React, { useContext, useState } from 'react';
import './Login.css';
import icon from '../../images/ggl.png'
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebaseConfig';
import { UserContext } from '../../App';
import { Redirect, Route, useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({})

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {


        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                const credential = result.credential;
                const token = credential.accessToken;
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
                setUser(user);

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

            });
    }

    return (

        <div className='login-form'>
            <h3>Login</h3>
            <img src={user.photoURL} alt="" />
            <h3>{user.displayName}</h3>
            <p> <img src={icon} alt="" /> Continue with Google</p>
            <Button onClick={handleGoogleLogin} variant="success">Login</Button>{' '}
        </div>

    );
};

export default Login;