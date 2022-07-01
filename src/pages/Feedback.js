import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import Header from './Header';

class Feedback extends React.Component {
  componentDidMount() {
    this.saveOnLocalStorage();
  }

  saveOnLocalStorage = () => {
    const { name, score, email, assertions } = this.props;
    const hastCreator = md5(email).toString();
    const gravatarUrl = `https://www.gravatar.com/avatar/${hastCreator}`;
    const { length } = localStorage;
    const perfis = [
      name, score, assertions, gravatarUrl,
    ];
    const vamos = JSON.parse(perfis);
    localStorage.setItem(length + 1, vamos);
    localStorage.removeItem('token');
  }

    handlePlayAgain = () => {
      const { history } = this.props;
      history.push('/');
    }

    handleRanking = () => {
      const { history } = this.props;
      history.push('/ranking');
    }

    render() {
      const { assertions, score } = this.props;
      const tres = 3;
      return (
        <div>
          <div>
            <Header />
            {assertions >= tres
              ? <h3 data-testid="feedback-text">Well Done!</h3>
              : <h3 data-testid="feedback-text">Could be better...</h3>}
          </div>
          <div>
            <h2 data-testid="feedback-total-score">{ score }</h2>
            <h2 data-testid="feedback-total-question">{ assertions }</h2>
            <button
              type="button"
              data-testid="btn-play-again"
              onClick={ this.handlePlayAgain }
            >
              Play Again
            </button>
            <button
              type="button"
              data-testid="btn-ranking"
              onClick={ this.handleRanking }
            >
              Ranking
            </button>
          </div>
        </div>
      );
    }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.name,
  email: state.player.gravatarEmail,
});

export default connect(mapStateToProps, null)(Feedback);
