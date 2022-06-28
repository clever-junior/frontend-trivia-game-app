import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Router>
          <Route exact path="/" component={ Login } />
          <Route path="/Settings" component={ Settings } />
        </Router>
      </Switch>
    </div>
  );
}

// começando o projeto
