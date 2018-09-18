import React from 'react';
import './SignUp.css';

const SignUp = () =>  {
    return (
      <div className="modal-container">
          <div className="modal-signup">
            <form className="signup-form">
              <a href="#">X</a>
              <h3>Create Account</h3>
              <label>Name</label>
              <input type="text"/>
              <label>Email</label>
              <input type="text"/>
              <label>Username</label>
              <input type="text"/>
              <label>Password</label>
              <input type="password"/>
              <label>Confirm Password</label>
              <input type="password"/>
              <button>Create Account</button>
              <button>Cancel</button>
            </form>
          </div>
        </div>
    )
}

export default SignUp;