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

export const GET_DECK = "GET_DECK";
export const getDeck = () => (dispatch, getState) => {
  const token = getState().auth.authToken;
  axios.get(`${API_BASE_URL}/dashboard`, {
    headers: { Authorization: "Bearer " + token }
  })
  .then((response) => dispatch(createDeckSuccess(response.data)))
  .catch((err) => console.log(err))
};

export const GET_DECK_SUCCESS = "GET_DECK_SUCCESS";
export const getDeckSuccess = (decks) => ({
  type: GET_DECK_SUCCESS,
  decks
})


// export const ADD_CARD = 'ADD_CARD';
// export const addCard = (term, definition, cardName) => ({
//   type: ADD_CARD,
//   term,
//   definition,
//   cardName,
// });
