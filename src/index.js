import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter
} from 'react-router-dom';

import App from './containers/App/App.view'
import store from './store'  

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.main'));