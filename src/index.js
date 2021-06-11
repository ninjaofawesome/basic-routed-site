import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import App from './pages/App/App';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const AppComponent = () => (
  <Router history={history}>
    <GlobalStyle  />
    <App />
  </Router>
);

ReactDOM.render(<AppComponent />, document.getElementById('root'));
