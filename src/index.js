import React from 'react';
import ReactDOM from 'react-dom';
import 'slick-carousel';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import routes from './routes';
import {Router, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);

