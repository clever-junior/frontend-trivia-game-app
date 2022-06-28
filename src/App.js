import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Router>
        <Route exact path="/" component={ Login } />
        <Route path="/Settings" component={ Settings } />
      </Router>
    </Switch>
  );
}

// começando o projeto
