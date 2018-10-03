import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {clearAuth} from '../../actions/auth.js';
import {clearAuthToken} from '../../local-storage';



const SignedInLinks = (props) =>  {
    return (
        <ul className="nav-links">
            <li className="links"><NavLink to='/create-deck'>+Create Deck</NavLink></li>
            <li className="links"><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li className="links"><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(clearAuth());
            clearAuthToken();
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);