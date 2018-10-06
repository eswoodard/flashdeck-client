import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import './Nav.css';

const Nav = (props) =>  {
  // console.log(props);

    return (
      <nav>
          <div className="logo">
            <Link to='/'>FlashDeck</Link>
          </div>
          {props.currentUser ?
          <SignedInLinks  />
          : <SignedOutLinks />
          }
        </nav>
    )
}


const mapStateToProps = state => {
  // console.log(state);
  return {
    currentUser: state.auth.currentUser,
  }

}
export default connect(mapStateToProps)(Nav);