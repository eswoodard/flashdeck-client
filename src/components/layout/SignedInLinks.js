import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {clearAuth} from '../../actions/auth.js';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';



const SignedInLinks = (props) =>  {
    // console.log("dashboard", props)
    return (
        <ul className="nav-links right hide-on-med-and-down" id="nav-mobile">
            <li className="links"><NavLink to='/create-deck'>+Create Deck</NavLink></li>
            <li className="links"><NavLink to='/dashboard' action={props.history.push('/dashboard')}>Dashboard</NavLink></li>
            <li className="links"><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(clearAuth());
            clearAuthToken();
        },

    }
}

export default withRouter(connect(null, mapDispatchToProps)(SignedInLinks));