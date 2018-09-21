export const ADD_DECK = 'ADD_DECK';
export const addList = (id, username, title) => ({
  type: ADD_DECK,
  id,
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

export const FLIP_CARD = 'FLIP_CARD';
export const flipCard = (isFlipped) => ({
  type: FLIP_CARD,
  isFlipped
})