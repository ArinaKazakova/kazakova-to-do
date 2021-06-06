import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import Router from './router';
import Header from './components/Header';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Header />
    <Routes>
      <Router />
    </Routes>
  </Provider>
);

export default App;
