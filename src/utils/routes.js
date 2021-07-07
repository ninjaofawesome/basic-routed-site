import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import { GlobalStyle } from './globalStyles';
import App from '../pages/App';
import About from '../pages/About';

const trackingId = process.env.REACT_APP_TRACKING_ID; 
ReactGA.initialize(trackingId);
ReactGA.set({
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});


const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const createRoutes = () => (
  <Router history={history}>
    <GlobalStyle />
    <Route path="/">
      <App />
    </Route>
    <Route path="about">
      <About />
    </Route>
  </Router>
);

export default createRoutes;