import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Ranking extends React.Component {
  state = {
    jogadores: [],
  }

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const sortedRanking = ranking.sort((a, b) => (b.score - a.score));
    this.setState({ jogadores: sortedRanking });
    // console.log(ranking);
    // console.log(sortedRanking[0].player.name);
    console.log(sortedRanking);
  }

    handleHome = () => {
      const { history } = this.props;
      history.push('/');
    }

    render() {
      const { jogadores } = this.state;
      // console.log(jogadores[0].player.name);
      return (
        <div>
          <Header />
          <h1 data-testid="ranking-title">Classificação</h1>
          <div>
            {
              jogadores.map((item, index) => (
                <h3 key={ index }>{ item.player.name }</h3>
                //  <h4 data-testid=player-score-${index}>{ item.player.score }</h4>
                // <img alt={ item.player.gravatarImg }src={ item.player.gravatarImg}></img>
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
