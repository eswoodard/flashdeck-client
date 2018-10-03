import React from 'react';
import {withRouter} from 'react-router-dom';



const DeckPortal = (props) =>  {
<<<<<<< HEAD
console.log(props);
=======
  // console.log(props.deck._id);
>>>>>>> 097f3e804082ef9cf4a63385c279e348d75d6b52

  return (

    <div className="flashdeck-summary-container">
      <p className="summary-item"> {props.deck.deckCards.length} cards</p>
      <div className="vertical"></div>
      <p className="summary-item">By: {props.deck.deckAuthor.username}</p>

      <div className="break"></div>
      <p className="topic">{props.deck.deckTitle}</p>
      <div className="button-container">
        <button onClick= { () => props.history.push(`deck/${props.deck._id}`) }>Study</button>
        <div className="vertical vertical2"></div>
        <button>Take Quiz</button>
      </div>
    </div>
    )



}

export default (withRouter)(DeckPortal);
