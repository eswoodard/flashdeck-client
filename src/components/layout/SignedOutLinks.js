import React from 'react';
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () =>  {
    return (
       <ul className="nav-links">
            <li className="links"><NavLink to='/signin'>Sign In</NavLink></li>
            <li className="links"><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;