import React from 'react';
import logo from './trivia.png';
import './App.css';
import Routes from './routes/index';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <Routes />
      </header>
    </div>
  );
}

// começando o projeto
