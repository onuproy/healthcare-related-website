import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { Link } from 'react-router-dom';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const {signInUsingGoogle} = useAuth();
    const [error,setError] = useState({});
    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || '/home'
    const redirect_uri1 = location.state?.form || '/home'

    const hangleGoogle = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    const hangleEmail = e =>{
        setEmail(e.target.value);
    }
    const hanglePassword = e =>{
        setPassword(e.target.value);
    }
    const hangleName = e =>{
        setName(e.target.value);
    }
    const hangleRegistration = e =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            history.push(redirect_uri1);
            userName();
        })
        .catch(error => {
            setError('');
        })
        e.preventDefault();
    }
    const userName = () =>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result => {})
    }
    return (
        <div className="login-form-area">
            <h2>Register</h2>
            <form action="" onSubmit={hangleRegistration}>
                <input onBlur={hangleName} type="text" name="Name" id="" placeholder="Name" />
                <input onBlur={hangleEmail} type="email" name="email" id="" placeholder="Email" />
                <input onBlur={hanglePassword} type="password" name="" id="" placeholder="Password" />
                <input className="submit-button" type="submit" value="Submit" />
            </form>
            <br/>
            <p>If You Have Already Account? <Link to='/login'>Sign In</Link></p>
            <p>--------------- OR ---------------</p>
            <button className="sign-button" onClick={hangleGoogle}><i className="fab fa-google"></i> Continue with Google</button>
        </div>
    );
};

export default Register;