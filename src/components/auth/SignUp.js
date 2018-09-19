import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () =>  {
    return (
      <div className="modal-container">
          <div className="modal-signup">
            <form className="signup-form">
              <Link className="x-out" to='/'>X</Link>
              <h3>Create Account</h3>
              <label>First Name</label>
              <input type="text"/>
              <label>Last Name</label>
              <input type="text"/>
              <label>Username</label>
              <input type="text"/>
              <label>Password</label>
              <input type="password"/>
              <button>Create Account</button>
              <button>Cancel</button>
              <p>Already have an account? <Link to='/signin'>Click Here</Link></p>
            </form>
          </div>
        </div>
    )
}

export default SignUp;