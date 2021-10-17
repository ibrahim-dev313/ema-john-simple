import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
            <div>
            <h2 className='text-center mt-3'>Register</h2>
                <form onSubmit=''>
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" className='form-control' name="" placeholder='Your Email' id="" />
                    <br />
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input className='form-control' type="password" placeholder='Your Password' name="" id="" />
                    <br />
                    <label for="exampleInputEmail1" class="form-label">Re-enter Password</label>
                    <input className='form-control' type="password" placeholder='Re-enter your Password' name="" id="" />
                    <br />
                    <input className='btn btn-success mb-3' type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <button  className='btn btn-warning'>GoogleSignIn</button>
            </div>
        </div>
    );
};

export default Register;