// Core
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './theme/constructor.scss';

// Instruments
import { store } from './store/store';

// Routes
import { history } from './navigation/history';
import { Routes } from './navigation';

export const App = () => {
  return (
    <Provider store={store}>
      <Router history = { history }>
        <Routes />
      </Router>
    </Provider>
  )
};
