import React from 'react';
import { NavLink } from 'react-router-dom'
import './DeckLinks.css';

const DeckLinks = () =>  {
    return (
       <ul className="nav-links">
            <li className="links"><NavLink to='/'>My Account</NavLink></li>
            <li className="links"><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default DeckLinks;