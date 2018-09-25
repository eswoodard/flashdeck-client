import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SignUpForm from './SignUpForm';

export function SignUpPage(props) {
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className="modal-container">
       <div className="modal-signup">
         <SignUpForm />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser != null
});

export default connect(mapStateToProps)(SignUpPage);

