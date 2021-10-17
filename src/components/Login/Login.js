import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    
    const {user, signInUsingGoogle} = useFirebase()

    return (
        <div className='login'>
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" className='form-control' name="" placeholder='Your Email' id="" />
                    <br />
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input className='form-control' type="password" placeholder='Your Password' name="" id="" />
                    <br />
                    <input className='btn btn-success mb-3' type="submit" value="Submit" />
                </form>
                <p>New to Ema-John? <Link to='/register'>Create Account</Link></p>
                <div>-----------or-------------</div>
                <button className='btn btn-warning' onClick={signInUsingGoogle}>GoogleSignIn</button>
            </div>
        </div>
    );
};

export default Login;