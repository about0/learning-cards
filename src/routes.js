import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Card from './components/CardComponent';
import CardList from './components/CardListComponent';
import HomePage from './components/HomePage';
import Header from './components/HeaderComponent';

export default (
  <Route path="/" components={App}>
    <IndexRoute component={Header}/>
    <Route path="cards" component={CardList}/>
    <Route path="card" component={Card}/>

  </Route>
)