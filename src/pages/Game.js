import React from 'react';
import Header from './Header';
import { getTrivia } from '../services/API';

class Game extends React.Component {
  async componentDidMount() {
    console.log(await getTrivia());
  }

  render() {
    return (
      <Header />
    );
  }
}

export default Game;
