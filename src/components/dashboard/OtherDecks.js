import React from 'react';



const OtherDecks = () =>  {
    return (
      <div className="other-flashdecks">
      <h2>Explore Community FlashDecks</h2>
          <div className="flashdeck container">
            <div className="flashdeck-summary-container">
              <p className="summary-item">15 cards</p>
              <div className="vertical"></div>
              <p className="summary-item">By: username</p>
              <div className="break"></div>
              <p className="topic">French</p>
                <div className="button-container">
                  <button>Study</button>
                  <div className="vertical vertical2"></div>
                  <button>Take Quiz</button>
                </div>
            </div>
            <div className="flashdeck-summary-container">
                <p className="summary-item">70 cards</p>
                <div className="vertical"></div>
                <p className="summary-item">By: username</p>
                <div className="break"></div>
                <p className="topic">Quantum Physics</p>
                <div className="button-container">
                  <button>Study</button>
                  <div className=" vertical vertical2"></div>
                  <button>Take Quiz</button>
                </div>
            </div>
            <div className="flashdeck-summary-container">
                <p className="summary-item">12 cards</p><div className="vertical"></div>
                <p className="summary-item">By: username</p>
                <div className="break"></div>
                <p className="topic">Russian Literature</p>
                <div className="button-container">
                  <button>Study</button>
                  <div className=" vertical vertical2"></div>
                  <button>Take Quiz</button>
                </div>
            </div>
            <div className="break"></div>
            <hr className="hr1"/>
          </div>

      </div>

    )
}

export default OtherDecks;