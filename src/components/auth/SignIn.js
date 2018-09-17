import React from 'react';
import './SignIn.css';

const SignIn = () =>  {
    return (
      <div className="modal-container">
        <div className="modal login">
         <form>
            <a href="#">X</a>
            <h3>Login</h3>
            <label>User Name</label>
            <input type="text"/>
            <label>Password</label>
            <input type="password"/>
            <button>Submit</button>
            <button>Cancel</button>
          </form>
        </div>
      </div>
    )
}

export default SignIn;