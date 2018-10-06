import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from './store';



it('renders without crashing', () => {
  shallow(<Provider store={store}>
    <App />
  </Provider>  );
});
