import React from 'react';
import { Route } from 'react-router';
import { GlobalStyle } from './globalStyles';
import App from '../pages/App';
import About from '../pages/About';

const routes = (
  <>
  <GlobalStyle />
  <Route path="/" component={App}>
    <Route path="about" component={About} />
  </Route>
  </>
);

export default routes;