import React from 'react';
import {Field} from 'redux-form';
import Textarea from '../input/textarea';
import {required, nonEmpty} from '../input/validators';


const DeckFormInputs = ({ fields }) => (
  <div className="deck-item">
    {fields.map((deckCard, index) => (
      <div key={index} className="card-input-container">

        <p>{index + 1}</p>
        <Field
          name={`${deckCard}.cardTerm`}
          type="text"
          component={Textarea}
          className="term"
          placeholder="Term"
          arialabel={`${deckCard}.cardTerm`}
          validate={[required, nonEmpty]}
        />
        <Field
          name={`${deckCard}.cardDefinition`}
          type="textarea"
          component={Textarea}
          className="definition"
          placeholder="Definition"
          arialabel={`${deckCard}.cardDefinition`}
          validate={[required, nonEmpty]}
        />
        <button
          className="remove-btn"
          type="button"
          title="Remove Field"
          onClick={() => fields.remove(index)}
        >
        <i className="fas fa-trash"></i>
        </button>
      </div>
    ))}
    <div className="deck-item add-card-container">
      <button type="button" className="add-card" onClick={() => fields.push({})}>+Add Card</button>
    </div>
  </div>
);

export default DeckFormInputs;

