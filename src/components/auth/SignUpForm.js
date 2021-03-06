import React from 'react';
import {registerUser} from '../../actions/users';
import { Link } from 'react-router-dom';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty, matches, length, isTrimmed} from '../input/validators';
import {login} from '../../actions/auth';
import './auth.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');


export class SignUpForm extends React.Component {
  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (

      <form className="signup-form" onSubmit={this.props.handleSubmit(values=>this.onSubmit(values))}>
        <Link className="x-out" to='/'>X</Link>
        <h3>Create Account</h3>
        <Field
          type="text"
          className="sign-in-up-input"
          name="firstName"
          component={Input}
          placeholder="First Name"
          arialabel="firstName"
          validate={[required, nonEmpty]}
        />
        <Field
          type="text"
          className="sign-in-up-input"
          name="lastName"
          component={Input}
          placeholder="Last Name"
          arialabel="lastName"
          validate={[required, nonEmpty]}
        />
        <Field
          type="text"
          className="sign-in-up-input"
          name="username"
          component={Input}
          validate={[required, nonEmpty, isTrimmed]}
          placeholder="Username"
          arialabel="username"
          />
        <Field
          type="password"
          className="sign-in-up-input"
          name="password"
          component={Input}
          validate={[required, passwordLength, isTrimmed]}
          placeholder="Password"
          arialabel="password"
          />
        <Field
          type="password"
          className="sign-in-up-input"
          name="passwordConfirm"
          component={Input}
          validate={[required, nonEmpty, matchesPassword]}
          placeholder="Confirm Password"
          arialabel="passwordConfirm"
          />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>Create Account</button>
        <p>Already have an account? <br/><Link to='/signin'>Click Here</Link></p>
      </form>
    )
  }
}

export default reduxForm({
  form: 'sign-up-form',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUpForm);