import React from 'react';
import './StudyDeck.css';
import Card from './Card';
import DeckNavigation from './DeckNavigation';
import CardList from './CardList';


const StudyDeck = () =>  {
    return (
      <div className="deck-container">
        <div className="study-deck">
          <h2>Deck Title</h2>
              <header>
                <p>10 cards</p>
                <a href="#">[Placeholder for fullscreen icon]</a>
              </header>
              <p className="instructions">Click card to flip it. Put a star on cards that need more practice.</p>
        </div>
        <Card />
        <DeckNavigation />
        <div className="button-container">
              <p>Think you're ready?</p>
              <button>Take Quiz</button>
        </div>
        <hr className="hr1"/>
        <CardList />
      </div>

    )
}

export default StudyDeck;