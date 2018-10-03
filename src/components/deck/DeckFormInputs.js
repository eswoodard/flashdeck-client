import React from 'react';
import {Field} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import Textarea from '../input/textarea';



export default class CreateDeckFormInputs extends React.Component {


  render() {
    return (
        <div className="deck-item">
          {/* <p>1</p> */}
          <div className="term-container">
            <Field
              className="term"
              name={`cardTerm${this.props.index}`}
              component={Input}
              validate={[required, nonEmpty]}
              type="text"
              placeholder="Term"
              arialabel={`term${this.props.index}`}
              />
              <br></br>

          </div>
          <div className="definition-container">
            <Field
              className="definition"
              name={`cardDefinition${this.props.index}`}
              component={Textarea}
              validate={[required, nonEmpty]}
              type="textarea"
              placeholder="Definition"
              arialabel={`definition${this.props.indes}`}
              />
              <br></br>

          </div>
        </div>
    )
  }
}

