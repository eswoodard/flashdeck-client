import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';


const LandingPage = () =>  {
    return (
      <div className="landing-page">
      <header className="lp-header">
        <div className="header-text">
          <h2>Flashdeck.  Learn faster, smarter, more efficiently.</h2>
          <Link to='/signup' className="lp-btn">Start Now</Link>
        </div>
        </header>
        {/* <hr/> */}
        <div className="middle-sections">
          <section className="lp-section1">
            <h3 className="first">Create</h3>
            <p>Build your own custom flashdecks to help you learn anything.</p>
          </section>
          {/* <hr/> */}
          <section className="lp-section1">
            <h3 className="second">Discover</h3>
            <p>Search and explore decks created by other members.</p>
          </section>
          {/* <hr/> */}
          <section className="lp-section1">
            <h3 className="third">Share</h3>
            <p>Help others learn by sharing your decks with the community.</p>
          </section>
        </div>
        {/* <hr/> */}
        <section className="lp-section last">
          <h3>What do you want to learn?</h3>
          <Link to='/signup' className="lp-btn2">Get Started</Link>
        </section>
      </div>

    )
}

export default LandingPage;