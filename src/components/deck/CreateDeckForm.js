import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './CreateDeckForm.css';
import CreateDeckFormInputs from './CreateDeckFormInputs';


export class CreateDeckForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="create-flashdeck">
        <h2>Create a new FlashDeck</h2>
        <form className="create-form" autoComplete="off">
          <div className="deck-info">
            <input
              className="title"
              name="title"
              id="title"
              component="input"
              type="text"
              placeholder="Subject"
              />
              <br></br>
            <label htmlFor="title" className="title-text">Deck Title</label>
        </div>
        <CreateDeckFormInputs/>
        <CreateDeckFormInputs/>
        <div className="deck-item">
          <div className="term-container">
            <input className="term add-card"
            type="submit"
            aria-label="term" placeholder="Enter Term"
            name="term"
            value="+ Add Card"/>
          </div>
        </div>
        <button className="create-card-btn bottom">Create</button>
      </form>
      </div>

    )
  }
}

export default reduxForm({
  form: 'create-deck-form'
})(CreateDeckForm);

// onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}