import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import './DeckForm.css';
import DeckFormInputs from './DeckFormInputs';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import {createDeck} from '../../actions/index'
import requiresLogin from '../requires-login';
import {connect} from 'react-redux';


export class EditDeckForm extends React.Component {
  state = {
    numCards: 1,
  };
  onSubmit(values) {
    // console.log(values);
    const deck = Object.assign({}, values);
    this.props.dispatch(createDeck(deck));
    this.props.history.push('/dashboard');

  }
  addCard = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({numCards: prevState.numCards+1}));
  }

  render() {

    console.log(this.props.initialValues);
    let inputs = [];
    for(let i=0; i<this.state.numCards; i++) {
      inputs.push(<DeckFormInputs index={i} key={i}/>)
    }
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
        {inputs}
        <div className="deck-item">
          <div className="term-container">
            <button className="add-card" onClick={this.addCard}
            >+Add Card</button>
          </div>
        </div>
        <button
          type="submit"
          className="create-card-btn"
          disabled={
            this.props.pristine || this.props.submitting
          }>
          Submit Changes
        </button>
        <button
          type="submit"
          className="create-card-btn delete"
          >
          Delete Deck
        </button>
      </form>
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






