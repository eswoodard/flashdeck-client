import React from 'react';
import './Deck.css';
import Card from './Card';
import DeckNavigation from './DeckNavigation';
import CardList from './CardList';
import {connect} from 'react-redux';
import {getDeckById} from '../../actions/index';
import Slider from 'react-slick';


export class Deck extends React.Component  {

  state = {
    checked: false,
  }

  handleChange =() => {
    this.setState({ checked: !this.state.checked})
  }

    componentDidMount() {
    this.props.dispatch(getDeckById(this.props.match.params.id));
  }

  render() {
    // console.log(this.props);

    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      lazyLoad: true,
      accessibility: true
    };

    if (!this.props.currentDeck){
      return null;
    } else  {
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
              <p className="instructions">Click card to flip it.</p>
        </div>
        <Slider {...sliderSettings}>
          {cards}
        </Slider>
        <hr className="hr1"/>
        <div className="card-list-container">
        <div className="deck-list-header">
              <h3>{this.props.currentDeck.deckCards.length} Cards in this deck</h3>
              {/* <select name="card-drop-down" id="card-drop-down">
                <option value="original">All</option>
                <option value="starred">Starred</option>
            </select> */}
              <div className="pretty p-default p-thick">
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
                <div className="state">
                  <label>Hide Cards</label>
                </div>
              </div>
        </div>
            {this.state.checked ? null : <div>{cardList}</div>}
            {/* {cardList} */}
            <div className="quiz-button-container">
              {console.log(this.props)}
              {this.props.currentDeck.deckAuthor !== this.props.currentUser.id ? null :
                  <button className="edit-btn" onClick= { () => this.props.history.push('/edit-deck')}>Edit This Deck</button>
              }
                </div>

          </div>
        </div>
    )

    }

  }
}

const mapStateToProps = state => ({
  currentDeck: state.flashDecks.currentDeck,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Deck);

