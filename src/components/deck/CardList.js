import React from 'react';



const CardList = () =>  {
    return (
      <div className="card-list-container">
        <div className="deck-list-header">
              <h3>3 Terms in this deck</h3>
              <select name="card-drop-down" id="card-drop-down">
                <option value="original">All</option>
                <option value="starred">Starred</option>
            </select>
            </div>
            <div className="deck-item">
              <p className="card-number">1</p>
              <div className="term-container">
                <p>quisque</p>
              </div>
              <div className="definition-container">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui sapien eget</p>
              </div>
            </div>
            <div className="button-container">
              <button className="edit-btn">Edit Deck</button>
            </div>
       </div>
    )
}

export default CardList;