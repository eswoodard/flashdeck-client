import React from 'react';



const CardList = (props) =>  {
    return (

      <div className="deck-card">
        <p className="card-number">{props.number+1}</p>
        <div className="term-container">
          <p>{props.term}</p>
        </div>
        <div className="definition-container">
            <p>{props.definition}</p>
        </div>
      </div>

    )
}

export default CardList;