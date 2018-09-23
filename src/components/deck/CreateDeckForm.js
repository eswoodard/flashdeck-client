import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './CreateDeckForm.css';
import CreateDeckFormInputs from './CreateDeckFormInputs';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';



export class CreateDeckForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="create-flashdeck">
        <h2>Create a new FlashDeck</h2>
        <form className="create-form" autoComplete="off" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <div className="deck-info">
            <Field
              className="title"
              name="title"
              component={Input}
              validate={[required, nonEmpty]}
              type="text"
              placeholder="Subject"
              />
              <br></br>
            <label htmlFor="title" className="title-text">Deck Title</label>
        </div>
        <CreateDeckFormInputs/>
        <div className="deck-item">
          <div className="term-container">
            <button className="add-card"
            type="submit"
            >+Add Card</button>
          </div>
        </div>
        <button
          type="submit"
          className="create-card-btn"
          disabled={
            this.props.pristine || this.props.submitting
          }>
          Create
        </button>
      </form>
      </div>

    )
  }
}

export default reduxForm({
  form: 'create-deck-form'
})(CreateDeckForm);

