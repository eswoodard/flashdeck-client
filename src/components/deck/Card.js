import React from 'react';
// import ReactCardFlip from 'react-card-flip';



const Card = (props) =>  {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front side">
          <div className="icon-container">
          <i className="material-icons icon">star_border
          </i>
          </div>
          <div className="card-term">
            <p>{props.term}</p>
          </div>
        </div>
        <div className="card-back side">
          <p>{props.definition}</p>
        </div>
        </div>
    </div>
  )
}

export default Card;