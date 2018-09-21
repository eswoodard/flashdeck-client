import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {flashDeckReducer} from './reducers';

export default createStore(
  combineReducers({
    form: formReducer,
    flashDecks: flashDeckReducer
  })
);

// export default createStore(flashDeckReducer);