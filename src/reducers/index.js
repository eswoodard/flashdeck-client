import * as actions from '../actions';

const initialState = {
  decks: [{
      id: 1,
      username: 'username1',
      title: 'Example Deck 1',
      cards: [{
          term: 'Example term 1.1',
          definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }, {
        term: 'Example term 1.2',
        definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
          term: 'Example term 1.3',
          definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }],

  }, {
      id: 2,
      username: 'username2',
      title: 'Example Deck 2',
      cards: [{
          term: 'Example term 2.1',
          definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
        term: 'Example term 2.2',
        definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }, {
          term: 'Example term 2.3',
          definition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }],
  }]
};

export const flashDeckReducer = (state=initialState, action) => {
  if(action.type === actions.ADD_DECK) {
    return Object.assign({}, state, {
      decks: [...state.decks, {
        id: action.id,
        username: action.username,
        title: action.title,
        cards: []
      }]
    });
  }
  else if (action.type === actions.ADD_CARD) {
    let decks = state.decks.map((deck, index) => {
      if (index !== action.deckIndex) {
        return deck;
      }
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
  else if (action.type === actions.FLIP_CARD) {
    return Object.assign({}, state, {
      isFlipped: false,
    })
  }
  return state;
}

