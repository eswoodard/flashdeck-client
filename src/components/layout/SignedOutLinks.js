import React from 'react';
import { NavLink } from 'react-router-dom'


const SignedOutLinks = (props) =>  {
    return (
       <ul className="nav-links right hide-on-med-and-down" id="nav-mobile">
            <li className="links"><NavLink onClick={props.onClick} to='/signin'>Sign In</NavLink></li>
            <li className="links"><NavLink onClick={props.onClick} to='/signup'>Sign Up</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;