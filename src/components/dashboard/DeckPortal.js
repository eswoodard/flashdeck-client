import React from 'react';
import {withRouter} from 'react-router-dom';


const DeckPortal = (props) =>  {
  console.log(props);
  const deckLength = props.deck.map((length => length.deckCards.length));
  console.log(deckLength);



  return (

    <div className="flashdeck-summary-container">
      <p className="summary-item"> cards</p>
      <div className="vertical"></div>
      <p className="summary-item">By: {props.deck.username}</p>
      <div className="break"></div>
      <p className="topic">4</p>
      <div className="button-container">
        <button onClick= { () => props.history.push(`/deck/${props.deck.id}`) }>Study</button>
        <div className="vertical vertical2"></div>
        <button>Take Quiz</button>
      </div>
    </div>
    )
}

export default withRouter(DeckPortal);