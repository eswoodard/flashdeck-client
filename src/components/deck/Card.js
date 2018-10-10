import React from 'react';
import ReactCardFlip from 'react-card-flip';
import {connect} from 'react-redux';


export class Card  extends React.Component  {

  state = {
    isFlipped: false,
    flipSpeed: 0.2,
    infinite: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped});
  }

  render() {
    return (
      <div className="card-container">
        <div className="card">
          <ReactCardFlip isFlipped={this.state.isFlipped} flipSpeedBackToFront={this.state.flipSpeed} flipSpeedFrontToBack={this.state.flipSpeed} infinite={this.state.infinite}>
            <div className="card-front side" key="front" onClick={this.handleClick}>
              {/* <div className="icon-container">
              <i className="material-icons icon">star_border
              </i>
              </div> */}
              {/* <div className="card-term"> */}
                <p>{this.props.term}</p>
              {/* </div> */}
            </div>
            <div className="card-back side" key="back" onClick={this.handleClick}>
              <p>{this.props.definition}</p>
            </div>
          </ReactCardFlip>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentDeck: state.flashDecks.currentDeck
});

export default connect(mapStateToProps)(Card);


