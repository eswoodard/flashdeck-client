import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';

export class SignIn extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal-login">
         <form className="sign-in" onSubmit={this.props.handleSubmit(values=>this.onSubmit(values))}>
            <Link className="x-out" to='/'>X</Link>
            <h3>Login</h3>
            <Field
               className="sign-in-up-input"
               type="text"
               name="username"
               component={Input}
               validate={[required, nonEmpty]}
            />
            <label htmlFor="username">User Name</label>
            <Field
              className="sign-in-up-input"
              type="password"
              name="password"
              component={Input}
              validate={[required, nonEmpty]}
            />
            <label htmlFor="password">Password</label>
            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
              >Submit</button>
            <p>Don't have an account? <Link to='/signup'>Click Here</Link></p>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'sign-in-form'
})(SignIn);