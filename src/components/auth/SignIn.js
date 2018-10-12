import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import {login} from '../../actions/auth';

export class SignIn extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
      .then(() => this.props.history.push('/dashboard'));

  }



  render() {

    console.log(this.props);

    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }


    return (
      <div className="modal-container">
        <div className="modal-login">
         <form className="sign-in" onSubmit={this.props.handleSubmit(values=>this.onSubmit(values))}>
            <Link className="x-out" to='/'>X</Link>
            <h3>Login</h3>
            {error}
            <Field
               className="sign-in-up-input"
               type="text"
               name="username"
               component={Input}
               validate={[required, nonEmpty]}
               placeholder="Username"
               aria-label="username"
            />
            <Field
              className="sign-in-up-input"
              type="password"
              name="password"
              component={Input}
              validate={[required, nonEmpty]}
              placeholder="Password"
               aria-label="password"
            />
            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
              >Submit</button>
            <p>Don't have an account? <Link to='/signup'>Click Here</Link></p>
            <p className="demo">Demo: DemoUser/password10</p>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'sign-in-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(SignIn);