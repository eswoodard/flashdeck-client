import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {flashDeckReducer} from './reducers';

export default createStore(
  combineReducers({
    form: formReducer,
    flashDeck: flashDeckReducer
  })
);

// export default createStore(flashDeckReducer);