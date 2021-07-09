import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import AppPage from '../pages/App';
import AboutPage from '../pages/About';

const RouteComponent = () => (
  <div>
    <Switch>
      <Route path='/about'>
        <AboutPage />
      </Route>
      <Route path='/'>
        <AppPage />
      </Route>
    </Switch>
  </div>
);

export default RouteComponent; 