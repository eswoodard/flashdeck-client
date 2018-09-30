import React from 'react';
import {withRouter} from 'react-router-dom';
import requiresLogin from '../requires-login';
import {connect} from 'react-redux';


export class DeckPortal extends React.Component {
  render() {
    console.log(this.props);

  return (

    <div className="flashdeck-summary-container">
      <p className="summary-item"> {this.props.deck.deckCards.length} cards</p>
      <div className="vertical"></div>
      <p className="summary-item">By: {this.props.currentUser.username}</p>
      <div className="break"></div>
      <p className="topic">{this.props.deck.deckTitle}</p>
      <div className="button-container">
        <button onClick= { () => this.props.history.push(`/deck/${this.props.deck.id}`) }>Study</button>
        <div className="vertical vertical2"></div>
        <button>Take Quiz</button>
      </div>
    </div>
    )

  }

}

const mapStateToProps = state => ({
  decks: state.flashDecks.decks,
  currentUser: state.auth.currentUser
});

export default requiresLogin()(connect(mapStateToProps)(DeckPortal));
