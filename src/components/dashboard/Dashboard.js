import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DeckPortal from './DeckPortal';



export class Dashboard extends React.Component {

  render() {
    console.log();
    const userDecks = this.props.decks.filter((deck) => deck.username === 'username2');
    // console.log(userDecks);
    const userDeckPortals = userDecks.map((deck, index) => {
      return (
        <DeckPortal deck={deck} key={index}/>
      )
    })

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
            <div className="break"></div>
            <hr className="hr1"/>
        </div>
      </div>

    )
  }
}


const mapStateToProps = state => ({
  decks: state.flashDecks.decks
});

export default connect(mapStateToProps)(Dashboard);

