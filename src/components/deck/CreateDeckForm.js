import React from 'react';
import {reduxForm, Field} from 'redux-form';
import './CreateDeckForm.css';
import CreateDeckFormInputs from './CreateDeckFormInputs';
import Input from '../input/input';
import {required, nonEmpty} from '../input/validators';
import {connect} from 'react-redux';
import {createDeck} from '../../actions/index'
import requiresLogin from '../requires-login';



export class CreateDeckForm extends React.Component {
  state = {
    numCards: 1,
  };
  onSubmit(values) {
    // console.log(values);
    const deck = Object.assign({}, values);
    this.props.dispatch(createDeck(deck));
    // console.log(this.props);
    this.props.history.push('/dashboard');

  }
  addCard = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({numCards: prevState.numCards+1}));
  }

  render() {
    let inputs = [];
    for(let i=0; i<this.state.numCards; i++) {
      inputs.push(<CreateDeckFormInputs index={i} key={i}/>)
    }
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
          Create
        </button>
      </form>
      </div>

    )
  }
}

export default requiresLogin()(reduxForm({
  form: 'create-deck-form'
})(CreateDeckForm));

CreateDeckForm = connect(
  state => ({
    cardName: state.cardName

  })
)
