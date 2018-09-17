import React from 'react';
import './CreateDeck.css';


const CreateDeck = () =>  {
    return (
      <div className="create-flashdeck">
      <h2>Create a new FlashDeck</h2>
      <form className="create-form" autoComplete="off">
        <div className="deck-info">
          <input
            className="title"
            name="title"
            type="text"
            placeholder="Subject"
            />
            <br></br>
          <label className="title-text">Deck Title</label>
          <div className="visibility-box">
            <input
              name="visibility"
              type="checkbox"
              id="visibility"
              value="visibility"
              defaultChecked
              />
            <label htmlFor="visibility">Visible to Everyone</label>
          </div>
        </div>
        <div className="deck-item">
          <p>1</p>
          <div className="term-container">
            <input
              className="term"
              type="text"
              aria-label="term"
              placeholder="Enter Term" name="term"/>
              <br></br>
            <label
              htmlFor="term" className="title-text">Term</label>
          </div>
          <div className="definition-container">
            <input
              className="definition"
              type="text"
              aria-label="definition" placeholder="Enter Definition" name="definition"
              />
              <br></br>
            <label className="title-text" htmlFor="definition" className="title-text">Definition</label>
          </div>
        </div>
        <div className="deck-item">
            <p>2</p>
            <div className="term-container">
              <input className="term"
              type="text"
              aria-label="term"
              placeholder="Enter Term" name="term"
              />
              <br></br>
              <label htmlFor="term" className="title-text">Term</label>
            </div>
            <div className="definition-container">
              <input
                className="definition"
                type="text"
                aria-label="definition" placeholder="Enter Definition" name="definition"
                />
                <br></br>
              <label className="title-text" htmlFor="definition" className="title-text">Definition</label>
            </div>
          </div>
            <div className="deck-item">
                <div className="term-container">
                  <input className="term add-card"
                  type="submit"
                  aria-label="term" placeholder="Enter Term"
                  name="term"
                  value="+ Add Card"/>
                </div>
              </div>
              <button>Create</button>
      </form>
      </div>

    )
}

export default CreateDeck;