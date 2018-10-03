import React from 'react';
import {reduxForm, Field, focus, FieldArray} from 'redux-form';
import './DeckForm.css';
import DeckFormInputs from './DeckFormInputs';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import {createDeck} from '../../actions/index'
import requiresLogin from '../requires-login';
import {connect} from 'react-redux';


const renderCards = ({ fields }) => (
  <div className="deck-item">
    {fields.map((card, index) => (
      <div key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <p>{index + 1}</p>
        <Field
          name={`${card}.cardTerm`}
          type="text"
          component={Input}
          label="Card Term"
        />
        <Field
          name={`${card}.cardDefinition`}
          type="text"
          component={Input}
          label="Card Definition"
        />
      </div>
    ))}
    <div>
      <button type="button" onClick={() => fields.push({})}>+Add Card</button>
    </div>
  </div>
);

  // state = {
  //   numCards: 1,
  // };
  function onSubmit(values) {
    // console.log(values);
    const deck = Object.assign({}, values);
    this.props.dispatch(createDeck(deck));
    this.props.history.push('/dashboard');

  }
  // addCard = (event) => {
  //   event.preventDefault();
  //   this.setState((prevState) => ({numCards: prevState.numCards+1}));
  // }



    // console.log(this.props.initialValues);
    // let inputs = [];
    // for(let i=0; i<this.state.numCards; i++) {
    //   inputs.push(<DeckFormInputs index={i} key={i}/>)
    // }

export class EditDeckForm extends React.Component {
  render() {
    return (
      <div className="create-flashdeck">
        <h2>Edit Deck</h2>
        <form className="create-form" autoComplete="off" onSubmit={this.props.handleSubmit(values => onSubmit(values))}>
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
        <FieldArray name="cards" component={renderCards} />
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






