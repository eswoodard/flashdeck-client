import React from 'react';
import './Deck.css';
import Card from './Card';
import DeckNavigation from './DeckNavigation';
import CardList from './CardList';
import {connect} from 'react-redux';
import {getDeckById} from '../../actions/index';
import Slider from 'react-slick';



export class Deck extends React.Component  {

 componentDidMount() {
    this.props.dispatch(getDeckById(this.props.match.params.id));
  }

  render() {

    var settings = {
      dots: true,
      infinite: true,
      // arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      lazyLoad: true,
      accessibility: true

    };

    // console.log(this.props);
    if (!this.props.currentDeck){
      console.log('I am null')
      return null;
    }

    else  {
      console.log('hello');
      console.log(this.props);
      const cards = this.props.currentDeck.deckCards.map((card, index) =>
        <Card term={card.cardTerm} definition={card.cardDefinition} key={index} />
      );
      const cardList = this.props.currentDeck.deckCards.map((card, index) =>
        <CardList term={card.cardTerm} definition={card.cardDefinition} key={index} number={index}/>
    );

    return (
      <div className="deck-container">
        <div className="study-deck">
          <h2>{this.props.currentDeck.deckTitle}</h2>
              <header>
                <p>{this.props.currentDeck.deckCards.length} cards in deck</p>
              </header>
              <p className="instructions">Click card to flip it. Put a star on cards that need more practice.</p>
        </div>
        <Slider {...settings}>
          {cards}
        </Slider>
        {/* <DeckNavigation cardNumber={this.props.currentDeck.deckCards.length}/>
        <div className="quiz-button-container">
              <p>Think you're ready?</p>
              <button className="take-quiz-btn">Take Quiz</button>
        </div> */}
        <hr className="hr1"/>
        <div className="card-list-container">
        <div className="deck-list-header">
              <h3>{this.props.currentDeck.deckCards.length} Terms in this deck</h3>
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
}

const mapStateToProps = state => ({
  currentDeck: state.flashDecks.currentDeck
});

export default connect(mapStateToProps)(Deck);