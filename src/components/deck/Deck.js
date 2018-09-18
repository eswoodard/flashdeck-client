import React from 'react';
import './Deck.css';
import Card from './Card';
import DeckNavigation from './DeckNavigation';
import CardList from './CardList';


const Deck = () =>  {
    return (
      <div className="deck-container">
        <div className="study-deck">
          <h2>Deck Title</h2>
              <header>
                <p>10 cards in deck</p>
              </header>
              <p className="instructions">Click card to flip it. Put a star on cards that need more practice.</p>
        </div>
        <Card />
        <DeckNavigation />
        <div className="quiz-button-container">
              <p>Think you're ready?</p>
              <button>Take Quiz</button>
        </div>
        <hr className="hr1"/>
        <CardList />
      </div>

    )
}

export default Deck;