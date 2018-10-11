import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {clearAuth} from '../../actions/auth.js';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';


const SignedInLinks = (props) =>  {

    function handleClick(event) {
        event.preventDefault();
        console.log(props);
        props.signOut();
        props.onClick;
        props.history.push('/');
    }

    return (
        <div>
            <ul className="nav-links nav-links-signed-in" id="nav-mobile">
                <li className="links" onClick={props.onClick}><NavLink to='/create-deck'>+Create Deck</NavLink></li>
                <li className="links" onClick={props.onClick}><NavLink to='/dashboard' action={props.history.push('/dashboard')}>Dashboard</NavLink></li>
                <li className="links"><NavLink to='/' onClick={handleClick}>Log Out</NavLink></li>
            </ul>
        </div>

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