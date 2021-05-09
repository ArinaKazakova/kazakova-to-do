import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

import ROUTES from './constants';

const Router = () => (
  <Routes>
    <Header />
    {ROUTES.map((route) => (
      <Route exact key={route.path} path={route.path} component={route.component} />
    ))}
  </Routes>
);

export default Router;
