import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';

export class SignUp extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="modal-container">
          <div className="modal-signup">
            <form className="signup-form" onSubmit={this.props.handleSubmit(values=>this.onSubmit(values))}>
              <Link className="x-out" to='/'>X</Link>
              <h3>Create Account</h3>
              <Field
                type="text"
                className="sign-in-up-input"
                name="firstName"
                component={Input}
                validate={[required, nonEmpty]}
              />
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                className="sign-in-up-input"
                name="lastName"
                component={Input}
                validate={[required, nonEmpty]}
              />
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                className="sign-in-up-input"
                name="userName"
                component={Input}
                validate={[required, nonEmpty]}
               />
              <label htmlFor="userName">Username</label>
              <Field
                type="password"
                className="sign-in-up-input"
                name="password"
                component={Input}
                validate={[required, nonEmpty]}
                />
              <label htmlFor="password">Password</label>
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>Create Account</button>
              <p>Already have an account? <Link to='/signin'>Click Here</Link></p>
            </form>
          </div>
        </div>
    )
  }
}

export default reduxForm({
  form: 'sign-up-form'
})(SignUp);