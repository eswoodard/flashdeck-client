import React from 'react';
import { NavLink } from 'react-router-dom'


const SignedInLinks = () =>  {
    return (
       <ul className="nav-links">
            <li className="links"><NavLink to='/create-deck'>+Create Deck</NavLink></li>
            <li className="links"><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li className="links"><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;