import {createStore} from 'redux';

import {flashDeckReducer} from './reducers';

export default createStore(flashDeckReducer);