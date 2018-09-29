import * as actions from '../actions';

const initialState = {
  decks: []
};

export const flashDeckReducer = (state=initialState, action) => {
  if(action.type === actions.CREATE_DECK_SUCCESS) {
    return Object.assign({}, state, {
      decks: [...state.decks, {
        ...action.deck
      }]
    });
  }
  else if (action.type === actions.GET_DECK_SUCCESS) {
    let decks = state.decks.map((deck, index) => {

      return Object.assign({}, deck, {
        cards: [...deck.cards, {
          term: action.term,
          definition: action.definition,
        }]
      });
    });
    return Object.assign({}, state, {
      decks
    });
  }
  return state;
}

