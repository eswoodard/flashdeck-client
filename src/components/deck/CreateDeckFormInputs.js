import React from 'react';
import {Field} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';



export default class CreateDeckFormInputs extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
        <div className="deck-item">
          {/* <p>1</p> */}
          <div className="term-container">
            <Field
              className="term"
              name="term"
              component={Input}
              validate={[required, nonEmpty]}
              type="text"
              placeholder="Enter Term"
              name="term"
              />
              <br></br>
            <label
              htmlFor="term" className="title-text">Term</label>
          </div>
          <div className="definition-container">
            <Field
              className="definition"
              name="definition"
              component={Input}
              validate={[required, nonEmpty]}
              type="textarea"
              placeholder="Enter Definition"
              name="definition"
              />
              <br></br>
            <label
              className="title-text"
              htmlFor="definition" className="title-text"
            >Definition
            </label>
          </div>
        </div>
    )
  }
}