export const ADD_DECK = 'ADD_DECK';
export const addList = (username, title) => ({
  type: ADD_DECK,
  username,
  title
});

export const ADD_CARD = 'ADD_CARD';
export const addCard = (term, definition, deckIndex) => ({
  type: ADD_CARD,
  term,
  definition,
  deckIndex
});
