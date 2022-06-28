import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Game from '../pages/Game';
import Settings from '../pages/Settings';

export default function Routes() {
  return (
    <Switch>
      <Router>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/Settings" component={ Settings } />
      </Router>
    </Switch>
  );
}
