import React from 'react';
import {Field} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';



export default class CreateDeckFormInputs extends React.Component {


  render() {
    return (
        <div className="deck-item">
          {/* <p>1</p> */}
          <div className="term-container">
            <Field
              className="term"
              name={`term${this.props.index}`}
              component={Input}
              validate={[required, nonEmpty]}
              type="text"
              placeholder="Enter Term"
              />
              <br></br>
            <label
              htmlFor={`term${this.props.index}`} className="title-text">Term</label>
          </div>
          <div className="definition-container">
            <Field
              className="definition"
              name={`definition${this.props.index}`}
              component={Input}
              validate={[required, nonEmpty]}
              type="textarea"
              placeholder="Enter Definition"
              />
              <br></br>
            <label
              className="title-text"
              htmlFor={`definition${this.props.index}`} className="title-text"
            >Definition
            </label>
          </div>
        </div>
    )
  }
}