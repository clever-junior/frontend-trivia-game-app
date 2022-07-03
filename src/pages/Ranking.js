import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import RankingPlayer from '../Components/ranking';

class Ranking extends React.Component {
  state = {
    jogadores: [],
  }
  // {
  //   ranking: [
  //     { name: nome_da_pessoa, score: 10, picture: url_da_foto_no_gravatar }
  //   ],
  //   token: token_recebido_pela_API
  // }

  // {ranking: [{name: "Kevin", score: 170, picture: "https://www.gravatar.com/avatar/4cd1363873c0a5e2164d93ea7eaec78e"}],
  //  token: "07ab638e3b17c17b194b4cc71456ff80120412011cfa7cfb5553f1c2b57dd451"}

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const sortedRanking = ranking.sort(
      (a, b) => (b.ranking[0].score - a.ranking[0].score),
    );
    this.setState({ jogadores: sortedRanking });
    localStorage.setItem('ranking', JSON.stringify(sortedRanking));
    // console.log(localStorage);
    // console.log(ranking);
    console.log(sortedRanking);
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
