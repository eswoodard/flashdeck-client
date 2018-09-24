import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';

import {flashDeckReducer} from './reducers/index';

const store = createStore(
  combineReducers({
    form: formReducer,
    flashDecks: flashDeckReducer,
    auth: authReducer,
    protectedData: protectedDataReducer
  }),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;

