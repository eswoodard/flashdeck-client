import React from 'react';
import {reduxForm, Field, focus, FieldArray} from 'redux-form';
import './DeckForm.css';
import DeckFormInputs from './DeckFormInputs';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import requiresLogin from '../requires-login';
import {connect} from 'react-redux';
import {editDeck} from '../../actions/index'
import {deleteDeck} from '../../actions/index'



export class EditDeckForm extends React.Component {

  onSubmit(values) {
    const deck = Object.assign({}, values);
    this.props.dispatch(editDeck(deck));
    this.props.history.push(`/dashboard`);
  }

  onClick() {
    const deckId = this.props.initialValues._id;
    this.props.dispatch(deleteDeck(deckId));
    this.props.history.push(`/dashboard`);
  }

  render() {
    return (
      <div className="create-flashdeck">
        <h2>Edit Deck</h2>
        <form className="create-form" autoComplete="off" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <div className="deck-info">
            <Field
              className="title"
              name="deckTitle"
              component={Input}
              validate={[required, nonEmpty]}
              type="text"
              placeholder="Deck Title"
              arialabel="Deck Title"
              />
              <br></br>
        </div>
        <FieldArray name="deckCards" component={DeckFormInputs} />
        <div className="deck-item">
        </div>
        <button
          type="submit"
          className="create-card-btn"
          disabled={
            this.props.pristine || this.props.submitting
          }>
         Submit Changes
        </button>
      </form>
      <button
          type="submit"
          onClick= { () => this.onClick()}
          className="create-card-btn delete"
          >
          Delete Deck
        </button>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  initialValues: state.flashDecks.currentDeck
})

EditDeckForm = reduxForm({
  form: 'edit-deck-form'
})(EditDeckForm)

export default connect(mapStateToProps)(EditDeckForm);






