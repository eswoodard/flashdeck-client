import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () =>  {
    return (
      <div className="modal-container">
        <div className="modal-login">
         <form className="sign-in">
            <Link className="x-out" to='/'>X</Link>
            <h3>Login</h3>
            <label>User Name</label>
            <input type="text"/>
            <label>Password</label>
            <input type="password"/>
            <button>Submit</button>
            <button>Cancel</button>
            <p>Don't have an account? <Link to='/signup'>Click Here</Link></p>
          </form>
        </div>
      </div>
    )
}

export default SignIn;