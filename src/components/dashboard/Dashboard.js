import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DeckPortal from './DeckPortal';
import requiresLogin from '../requires-login';
<<<<<<< HEAD
import {fetchProtectedData} from '../../actions/protected-data';
import {addDeck} from '../../actions/index';
=======
import {getAllDecks} from '../../actions/index.js';

>>>>>>> 097f3e804082ef9cf4a63385c279e348d75d6b52



export class Dashboard extends React.Component {

  componentDidMount() {
<<<<<<< HEAD
    this.props.dispatch(addDeck());
  }

  render() {
    console.log();
    const userDecks = this.props.decks.filter((deck) => deck.username === this.props.currentUser);
    console.log(userDecks);
=======
    this.props.dispatch(getAllDecks());
  }

  render() {
    // console.log(this.props);
    const userDecks = this.props.decks.filter((deck) => deck.deckAuthor.username == this.props.currentUser.username);
    // console.log(userDecks);
>>>>>>> 097f3e804082ef9cf4a63385c279e348d75d6b52
    const userDeckPortals = userDecks.map((deck, index) => {
      return (
        <DeckPortal deck={deck} dispatch={this.props.dispatch} key={index}/>
      )
    })

    const memberDecks = this.props.decks.filter((deck) => deck.deckAuthor.username !== this.props.currentUser.username);
    // console.log(memberDecks);
    const memberDeckPortals = memberDecks.map((deck, index) => {
      // console.log(deck);
      return (
        <DeckPortal deck={deck} dispatch={this.props.dispatch} key={index}/>
      )
    })
    // console.log(userDeckPortals);

    return (
      <div className="flashdecks">
        <div className="user-flashdecks">
          <h2>Welcome {this.props.currentUser.firstName}! Here are your FlashDecks:</h2>
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

