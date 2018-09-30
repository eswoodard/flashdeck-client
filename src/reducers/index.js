import * as actions from '../actions';

const initialState = {
  decks: []
};

export const flashDeckReducer = (state=initialState, action) => {
  if(action.type === actions.CREATE_DECK_SUCCESS) {
    console.log('deck successfully created', action);
  }
  else if (action.type === actions.GET_DECK_SUCCESS) {
    const deck = action.decks.deck;
      return Object.assign({}, state, {
        decks: [...state.decks,
          ...deck
        ]
      });
  }
  return state;
}

