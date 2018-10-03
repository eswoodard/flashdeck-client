<<<<<<< HEAD
export const ADD_DECK = 'ADD_DECK';
export const addDeck = (username, title) => ({
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
=======
import axios from 'axios';
import {API_BASE_URL} from '../config';

export const CREATE_DECK = 'CREATE_DECK';
export const createDeck = (deck) => (dispatch, getState) => {
  console.log(deck);
  const token = getState().auth.authToken;
  axios.post(`${API_BASE_URL}/create-deck`, deck, {
    headers: { Authorization: "Bearer " + token }
  })
  .then((response) => dispatch(createDeckSuccess(response.data)))
  .catch((err) => console.log(err))
};


export const CREATE_DECK_SUCCESS = "CREATE_DECK_SUCCESS";
export const createDeckSuccess = (deck) => ({
  type: CREATE_DECK_SUCCESS,
  deck,
})

export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const getAllDecks = () => (dispatch, getState) => {
  if (getState().flashDecks.decks.length > 0) {
    return
  };
  const token = getState().auth.authToken;
  axios.get(`${API_BASE_URL}/dashboard`, {
    headers: { Authorization: "Bearer " + token }
  })
  .then((response) => {
    // console.log(response);
    dispatch(getAllDecksSuccess(response.data))
  })
  .catch((err) => console.log(err))
};

export const GET_ALL_DECKS_SUCCESS = "GET_ALL_DECKS_SUCCESS";
export const getAllDecksSuccess = (decks) => ({
  type: GET_ALL_DECKS_SUCCESS,
  decks
})

export const GET_DECK_BY_ID = 'GET_DECK_BY_ID';
export const getDeckById = (deckId) => (dispatch, getState) => {
  // console.log(deckId);
 ;
  const token = getState().auth.authToken;
  axios.get(`${API_BASE_URL}/deck/${deckId}`, {
    headers: { Authorization: "Bearer " + token}
  })
  .then((response) => {
    // console.log(response);
    dispatch(getDeckByIdSuccess(response.data))
  })
  .catch((err) => console.log(err))
};

export const GET_DECK_BY_ID_SUCCESS = 'GET_DECK_BY_ID_SUCCESS';
export const getDeckByIdSuccess = (deck) => ({
  type: GET_DECK_BY_ID_SUCCESS,
  deck
})


// export const LOAD_DECK_DATA = 'LOAD_DECK_DATA';
// export const loadDeckData = (deck) => {
//   type: LOAD_DECK_DATA,
//   deck
// }



// export const EDIT_DECK = 'EDIT_DECK';
// export const editDeck = (deck) => (dispatch, getState) => {
//   console.log(deck);
//   const token = getState().auth.authToken;
//   axios.put(`${API_BASE_URL}/edit-deck`, deck, {
//     headers: { Authorization: "Bearer " + token }
//   })
//   .then((response) => dispatch(createDeckSuccess(response.data)))
//   .catch((err) => console.log(err))
// };


// export const CREATE_DECK_SUCCESS = "CREATE_DECK_SUCCESS";
// export const createDeckSuccess = (deck) => ({
//   type: CREATE_DECK_SUCCESS,
//   deck,
// })


// export const ADD_CARD = 'ADD_CARD';
// export const addCard = (term, definition, cardName) => ({
//   type: ADD_CARD,
//   term,
//   definition,
//   cardName,
// });
>>>>>>> 097f3e804082ef9cf4a63385c279e348d75d6b52
