import React from 'react';
import {reduxForm, Field, focus, FieldArray} from 'redux-form';
import './DeckForm.css';
import DeckFormInputs from './DeckFormInputs';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import {createDeck} from '../../actions/index'
import requiresLogin from '../requires-login';



export class CreateDeckForm extends React.Component {
  onSubmit(values) {
    // console.log(values);
    const deck = Object.assign({}, values);
    // console.log(deck);
    this.props.dispatch(createDeck(deck));
    this.props.history.push('/dashboard');
  }

  render() {


    return (
      <div className="create-flashdeck">
        <h2>Create Your FlashDeck</h2>
        <form className="create-form" autoComplete="off" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <div className="deck-info">
            <Field
              className="title"
              name="deckTitle"
              component={Input}
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
         Create Deck
        </button>
        <button
          type="submit"
          className="create-card-btn delete"
          onSubmit={()=>this.props.history.push('/dashboard')}
          >
          Cancel
        </button>
      </form>
      </div>

    )
  }
  }



export default requiresLogin()(reduxForm({
  form: 'create-deck-form',
  initialValues: {
    "deckCards": [
      {}
    ]
  }
  // onSubmitFail: (errors, dispatch) =>
  //   dispatch(focus('create-deck-form', Object.keys(errors)[0]))
})(CreateDeckForm));



