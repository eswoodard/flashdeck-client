import React from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import DeckLinks from './DeckLinks';
import './Nav.css';

const Nav = () =>  {
    return (
      <nav>
          <div className="logo">
            <Link to='/'>FlashDeck</Link>
          </div>
          <SignedOutLinks />
          {/* <SignedInLinks /> */}
          {/* <DeckLinks /> */}
        </nav>
    )
}

export default Nav;