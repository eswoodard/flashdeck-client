import React from 'react';
import './Deck.css';
import Card from './Card';
import DeckNavigation from './DeckNavigation';
import CardList from './CardList';
import {connect} from 'react-redux';


export class Deck extends React.Component  {

  render() {
    const deck = this.props.decks.filter((deck) => deck.id == this.props.match.params.id);
    const cards = deck[0].cards.map((card, index) =>
        <Card term={card.term} definition={card.definition} key={index} />
      );
    const cardList = deck[0].cards.map((card, index) =>
    <CardList term={card.term} definition={card.definition} key={index} number={index}/>
    );
    return (
      <div className="deck-container">
        <div className="study-deck">
          <h2>{deck[0].title}</h2>
              <header>
                <p>{deck[0].cards.length} cards in deck</p>
              </header>
              <p className="instructions">Click card to flip it. Put a star on cards that need more practice.</p>
        </div>
        {cards}
        <DeckNavigation cardNumber={deck[0].cards.length}/>
        <div className="quiz-button-container">
              <p>Think you're ready?</p>
              <button>Take Quiz</button>
        </div>
        <hr className="hr1"/>
        <div className="card-list-container">
        <div className="deck-list-header">
              <h3>{deck[0].cards.length} Terms in this deck</h3>
              <select name="card-drop-down" id="card-drop-down">
                <option value="original">All</option>
                <option value="starred">Starred</option>
            </select>
            </div>
            {cardList}
            <div className="quiz-button-container">
                  <button className="edit-btn">Edit Deck</button>
                </div>
          </div>
        </div>

    )
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(Deck);