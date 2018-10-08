import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import Textarea from '../input/textarea';


const DeckFormInputs = ({ fields }) => (
  <div className="deck-item">
    {fields.map((deckCard, index) => (
      <div key={index} className="card-input-container">
        <button
          className="remove-btn"
          type="button"
          title="Remove Field"
          onClick={() => fields.remove(index)}
        >
        <i className="fas fa-trash"></i>
        {/* <i className="material-icons">
        delete</i> */}
        </button>
        <p>{index + 1}</p>
        <Field
          name={`${deckCard}.cardTerm`}
          type="text"
          component={Textarea}
          className="term"
          placeholder="Term"
          arialabel={`${deckCard}.cardTerm`}
        />
        <Field
          name={`${deckCard}.cardDefinition`}
          type="textarea"
          component={Textarea}
          className="definition"
          placeholder="Definition"
          arialabel={`${deckCard}.cardDefinition`}
        />
      </div>
    ))}
    <div className="deck-item">
      <button type="button" className="add-card" onClick={() => fields.push({})}>+Add Card</button>
    </div>
  </div>
);

export default DeckFormInputs;

