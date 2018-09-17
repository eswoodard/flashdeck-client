import React from 'react';



const Card = () =>  {
    return (
      <div className="card-container">
          <div className="card-front">
            <p className="star">Star Icon</p>
            <div  className="term">
              <p>quisque</p>
            </div>
          </div>
          <div className="card-back">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui sapien eget.</p>
          </div>
      </div>
    )
}

export default Card;