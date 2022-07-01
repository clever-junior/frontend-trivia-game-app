import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Ranking extends React.Component {
    handleHome = () => {
      const { history } = this.props;
      history.push('/');
    }

    render() {
      return (
        <div>
          <Header />
          <h1 data-testid="ranking-title">Classificação</h1>
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
