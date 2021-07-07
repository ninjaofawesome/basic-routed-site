import React from 'react';
import ReactDOM from 'react-dom';
import createRoutes from './utils/routes';

const routes = createRoutes();

ReactDOM.render(routes, document.getElementById('root'));
