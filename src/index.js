import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from 'shared/Router';
import { Provider } from 'react-redux';
import store from 'redux/config/configStore';
import './reset.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
