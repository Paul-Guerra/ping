import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appState from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* eslint no-underscore-dangle: "off" */
const store = createStore(
  appState,
  applyMiddleware()
);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
