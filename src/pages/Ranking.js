import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Ranking extends React.Component {
  state = {
    // Jogadores: {},
  }

  // const = {
  //   1: separadas
  //   2: separadas ,
  //   2: [ sadas, dfasdas, sdaasd ]
  // }

  componentDidMount() {
    const players = localStorage;
    // this.setState({
    //   Jogadores: players,
    // });
    // const todosJogadores = JSON.parse(players);
    // console.log(todosJogadores);
    console.log(players);
    // player;
    // for ( let i = 0; i < players.length; i++) {
    //   players[i].replace('','')
    // }
  }

    handleHome = () => {
      const { history } = this.props;
      history.push('/');
    }

    render() {
      // const { Jogadores } = this.state;
      return (
        <div>
          <Header />
          <h1 data-testid="ranking-title">Classificação</h1>
          {/* {
            console.log('aaaa', Jogadores)
          } */}
          <button
            type="button"
            data-testid="btn-go-home"
            onClick={ this.handleHome }
          >
            Inicio
          </button>
          <div />
        </div>
      );
    }
}

Ranking.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Ranking;
