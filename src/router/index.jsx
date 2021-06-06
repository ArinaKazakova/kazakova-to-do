import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from './constants';

const Router = () => (
  <Switch>
    {ROUTES.map((route) => (
      <Route exact key={route.path} path={route.path} component={route.component} />
    ))}
  </Switch>
);

export default Router;
