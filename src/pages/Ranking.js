import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import RankingPlayer from '../Components/ranking';

class Ranking extends React.Component {
  state = {
    jogadores: [],
  }

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const sortedRanking = ranking.sort((a, b) => (b.score - a.score));
    this.setState({ jogadores: sortedRanking });
    // localStorage.setItem('ranking', JSON.stringify([sortedRanking]));
    // console.log(localStorage);
  }

    handleHome = () => {
      const { history } = this.props;
      history.push('/');
    }

    render() {
      const { jogadores } = this.state;
      // console.log(jogadores);
      return (
        <div>
          <Header />
          <h1 data-testid="ranking-title">Classificação</h1>
          <div>
            {
              jogadores.map((item, index) => (
                <RankingPlayer key={ index } info={ item } index={ index } />
              ))
            }
          </div>
          <button
            type="button"
            data-testid="btn-go-home"
            onClick={ this.handleHome }
          >
            Inicio
          </button>
        </div>
      );
    }
}

Ranking.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Ranking;
