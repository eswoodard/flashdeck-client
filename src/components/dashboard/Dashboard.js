import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DeckPortal from './DeckPortal';
import requiresLogin from '../requires-login';
import {getDeck} from '../../actions/index.js';



export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getDeck());
  }

  render() {
    // console.log(this.props);
    const userDecks = this.props.decks.filter((deck) => {
      console.log(deck.deckAuthor);
      console.log(this.props.currentUser.id);
      deck.deckAuthor == this.props.currentUser.id});
    // console.log(userDecks);
    const userDeckPortals = userDecks.map((deck, index) => {
      return (
        <DeckPortal deck={deck} key={index}/>
      )
    })

    const memberDecks = this.props.decks.filter((deck) => deck.deckAuthor !== this.props.currentUser.id);
    console.log(memberDecks);
    const memberDeckPortals = memberDecks.map((deck, index) => {
      // console.log(deck);
      return (
        <DeckPortal deck={deck} key={index}/>
      )
    })
    // console.log(userDeckPortals);

    return (
      <div className="flashdecks">
        <div className="user-flashdecks">
          <h2>Your FlashDecks</h2>
          <div className="flashdeck container">
            {userDeckPortals}
          </div>
            <div className="break"></div>
              <div className="dashboard-btn-container">
                <button className="dashboard-btn" onClick= { () => this.props.history.push('/create-deck') }>Create Deck</button><br/>
                <button className="dashboard-btn">See Quiz Scores</button>
              </div>
                <hr className="hr1"/>
        </div>
        <div className="other-flashdecks">
          <h2>Member FlashDecks</h2>
          <div className="flashdeck container">
            {memberDeckPortals}
          </div>
            <div className="break"></div>
            <hr className="hr1"/>
        </div>
      </div>

    )
  }
}


const mapStateToProps = state => ({
  decks: state.flashDecks.decks,
  currentUser: state.auth.currentUser
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

