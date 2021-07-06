import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import routes from './utils/routes';

const trackingId = process.env.REACT_APP_TRACKING_ID; 
ReactGA.initialize(trackingId);
ReactGA.set({
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const AppComponent = () => (
  <Router history={history} routes={routes} />
);

ReactDOM.render(<AppComponent />, document.getElementById('root'));
