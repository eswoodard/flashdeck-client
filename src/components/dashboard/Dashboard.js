import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';



export class Dashboard extends React.Component {

  render() {
    console.log(this.props.decks);
    const decks = this.props.decks.map((deck, index) => {
      console.log(deck.cards.length, deck.username, deck.title);

        <div className="flashdeck-summary-container" key={index}>
          <p className="summary-item">{deck.cards.length} cards</p>
          <div className="vertical"></div>
          <p className="summary-item">By: {deck.username}</p>
          <div className="break"></div>
          <p className="topic">{deck.title}</p>
          <div className="button-container">
            <button>Study</button>
            <div className="vertical vertical2"></div>
            <button>Take Quiz</button>
          </div>
        </div>
    })
    console.log(decks);

    return (
      <div className="flashdecks">
        <div className="user-flashdecks">
          <h2>Your FlashDecks</h2>
          <div className="flashdeck container">
            {decks}
          </div>
            <div className="break"></div>
              <div className="dashboard-btn-container">
                <button className="dashboard-btn">Create Deck</button><br/>
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

Dashboard.defaultProps = {
  username: 'username',
  title: 'title',
};

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(Dashboard);

