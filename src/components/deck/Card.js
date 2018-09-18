import React from 'react';



const Card = () =>  {
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-front side">
            <div className="icon-container">
            <i className="material-icons icon">star_border
            </i>
            <i className="material-icons icon">
                crop_free</i>
            </div>
            <div className="card-term">
              <p>quisque</p>
            </div>
          </div>
          <div className="card-back side">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui sapien eget.</p>
          </div>
         </div>
      </div>
    )
}

export default Card;