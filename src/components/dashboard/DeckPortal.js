import React from 'react';
import {withRouter} from 'react-router-dom';


const DeckPortal = (props) =>  {
console.log(props);

  return (
    <div className="flashdeck-summary-container">
      <p className="summary-item">{props.deck.cards.length} cards</p>
      <div className="vertical"></div>
      <p className="summary-item">By: {props.deck.username}</p>
      <div className="break"></div>
      <p className="topic">{props.deck.title}</p>
      <div className="button-container">
        <button onClick= { () => props.history.push(`/deck/${props.deck.id}`) }>Study</button>
        <div className="vertical vertical2"></div>
        <button>Take Quiz</button>
      </div>
    </div>
  )
}

export default withRouter(DeckPortal);