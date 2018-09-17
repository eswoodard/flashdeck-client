import React from 'react';


const UserDecks = () =>  {
    return (
      <div className="user-flashdecks">
      <h2>Your FlashDecks</h2>
          <div className="flashdeck container">
            <div className="flashdeck-summary-container">
              <p className="summary-item">13 cards</p>
              <div className="vertical"></div>
              <p className="summary-item">By: username</p>
              <div className="break"></div>
              <p className="topic">CSS</p>
              <div className="button-container">
                <button>Study</button>
                <div className="vertical vertical2"></div>
                <button>Take Quiz</button>
              </div>
            </div>
            <div className="flashdeck-summary-container">
              <p className="summary-item">25 cards</p>
              <div className="vertical"></div>
              <p className="summary-item">By: username</p>
              <div className="break"></div>
              <p className="topic">HTML</p>
              <div className="break"></div>

                <div className="button-container">
                  <button>Study</button>
                  <div className="vertical vertical2"></div>
                  <button>Take Quiz</button>
                </div>
            </div>
            <div className="flashdeck-summary-container">
                <p className="summary-item">30 cards</p>
                <div className="vertical"></div>
                <p className="summary-item">By: username</p>
                <div className="break"></div>
                <p className="topic">JavaScript</p>
                <div className="button-container">
                  <button>Study</button>
                  <div className="vertical vertical2"></div>
                  <button>Take Quiz</button>
                </div>
            </div>
            <div className="flashdeck-summary-container">
                <p className="summary-item">10 cards</p><div className="vertical"></div>
                <p className="summary-item">By: username</p>
                <div className="break"></div>
                <p className="topic">React</p>
                <div className="button-container">
                  <button>Study</button>
                  <div className=" vertical vertical2"></div>
                  <button>Take Quiz</button>
                </div>
            </div>
            <div className="break"></div>
            <button className="see-scores">Create Deck</button>
            <div className="break"></div>
            <button className="see-scores">See Quiz Scores</button>
            <hr className="hr1"/>
          </div>
      </div>

    )
}

export default UserDecks;