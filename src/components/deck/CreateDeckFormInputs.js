import React from 'react';
import {reduxForm, Field} from 'redux-form';



export default class CreateDeckFormInputs extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
        <div className="deck-item">
          <p>1</p>
          <div className="term-container">
            <input
              className="term"
              name="term"
              id="term"
              component="input"
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
              name="definition"
              id="definition"
              component="input"
              type="text"
              aria-label="definition" placeholder="Enter Definition" name="definition"
              />
              <br></br>
            <label className="title-text" htmlFor="definition" className="title-text">Definition</label>
          </div>
        </div>
    )
  }
}