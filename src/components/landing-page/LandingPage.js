import React from 'react';
import './LandingPage.css';

const LandingPage = () =>  {
    return (
      <div className="landing-page">
      <header className="lp-header">
          <h2>Create, discover, and share flashdecks to help you learn faster, smarter, and more efficiently.</h2>
          <button className="lp-btn">Start Now</button>
        </header>
        <hr/>
        <section className="lp-section">
          <h3>Create</h3>
          <p>Create your own custom flashdecks to help you learn anything.</p>
        </section>
        <hr/>
        <section className="lp-section">
          <h3>Discover</h3>
          <p>Search and explore decks created by other members.</p>
        </section>
        <hr/>
        <section className="lp-section">
          <h3>Share</h3>
          <p>Help others learn by sharing your decks with the community.</p>
        </section>
        <hr/>
        <section className="lp-section">
          <h3>What do you want to learn?</h3>
          <button className="bottom lp-btn">Get Started</button>
        </section>
      </div>

    )
}

export default LandingPage;