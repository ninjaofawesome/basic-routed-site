import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { GlobalStyle } from './globalStyles';
import App from '../pages/App';
import About from '../pages/About';
import Header from '../components/Header';

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
      <Header />
      <Switch>
        <Route path='/'>
          <App />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
  </Router>
);

export default createRoutes;