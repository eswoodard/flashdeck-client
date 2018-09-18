import React from 'react';
import { NavLink } from 'react-router-dom'
import './SignedInLinks.css';

const SignedInLinks = () =>  {
    return (
       <ul className="nav-links">
            <li className="links"><NavLink to='/'>+Create Deck</NavLink></li>
            <li className="links"><NavLink to='/'>My Account</NavLink></li>
            <li className="links"><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;