import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DeckPortal from './DeckPortal';
import requiresLogin from '../requires-login';
import {getAllDecks} from '../../actions/index.js';


export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getAllDecks());
  }

  render() {
    const userDecks = this.props.decks.filter((deck) => deck.deckAuthor.username == this.props.currentUser.username);
    const userDeckPortals = userDecks.map((deck, index) => {
      return (
        <DeckPortal deck={deck} dispatch={this.props.dispatch} key={index}/>
      )
    })

    const memberDecks = this.props.decks.filter((deck) => deck.deckAuthor.username !== this.props.currentUser.username);
    const memberDeckPortals = memberDecks.map((deck, index) => {
      return (
        <DeckPortal deck={deck} dispatch={this.props.dispatch} key={index}/>
      )
    })

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
              </div>
                <hr className="hr1 last-hr"/>
        </div>
        <div className="other-flashdecks">
          <h2>Community FlashDecks</h2>
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



