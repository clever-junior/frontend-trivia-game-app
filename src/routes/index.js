import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Game from '../pages/Game';

export default function Routes() {
  return (
    <Switch>
      <Router>
        <Route exact path="/" component={ (props) => <Login props={ props } /> } />
        <Route path="/game" component={ Game } />
      </Router>
    </Switch>
  );
}
