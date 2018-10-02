import * as actions from '../actions';

const initialState = {
  decks: [],
  currentDeck: null
};

export const flashDeckReducer = (state=initialState, action) => {
  if(action.type === actions.CREATE_DECK_SUCCESS) {
    console.log('deck successfully created', action);
    const decks = state.decks.slice();
    decks.unshift(action.deck.deck);
    return Object.assign({}, state, {
      decks
    })
  }
  else if (action.type === actions.GET_ALL_DECKS_SUCCESS) {
    console.log(action);
      return Object.assign({}, state, {
        decks: [
          ...action.decks
        ]
      });
  }
  else if (action.type === actions.GET_DECK_BY_ID_SUCCESS) {
    // console.log(action);
    const deck = action.deck.deck;
    console.log(deck);
      return Object.assign({}, state, {
        currentDeck:
          deck

      });
  }
  return state;
}


// ...state.decks,