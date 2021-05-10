import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import Router from './router';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Router />
    </Routes>
  </div>
);

export default App;
