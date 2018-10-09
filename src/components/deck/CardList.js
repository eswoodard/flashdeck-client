import React from 'react';



const CardList = (props) =>  {
    return (

      <div className="deck-card">
        <p className="card-number">#{props.number+1}</p>
        <div className="term-container">
          <p><span className="label">Term: </span>{props.term}</p>
        </div>
        <div className="card-list-vertical vertical"></div>
        <div className="definition-container">
            <p><span className="label">Definition: </span>{props.definition}</p>
        </div>
      </div>

    )
}

export default CardList;