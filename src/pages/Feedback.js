import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';

class Feedback extends React.Component {
  componentDidMount() {
    this.saveLocalStorage();
  }

  // saveOnLocalStorage = () => {
  //   const { name, score, email, assertions } = this.props;
  //   const hastCreator = md5(email).toString();
  //   const gravatarUrl = `https://www.gravatar.com/avatar/${hastCreator}`;
  //   const { length } = localStorage;
  //   const perfis = [
  //     name, score, assertions, gravatarUrl,
  //   ];
  //   localStorage.setItem(length + 1, perfis);
  //   localStorage.removeItem('token');
  // }

    handlePlayAgain = () => {
      const { history } = this.props;
      history.push('/');
    }

    handleRanking = () => {
      const { history } = this.props;
      history.push('/ranking');
    }

    saveLocalStorage = () => {
      const {
        player,
      } = this.props;

      // console.log(player);
      // localStorage.removeItem('token');
      // console.log(localStorage.getItem('token'));
      if (!localStorage.getItem('ranking')) {
        const token = localStorage.getItem('token');
        localStorage.setItem('ranking', JSON.stringify([player, token]));
      } else {
        const ranking = JSON.parse(localStorage.getItem('ranking'));
        const token = localStorage.getItem('token');
        localStorage.setItem('ranking', JSON.stringify([...ranking, player, token]));
      }
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
  player: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.name,
  email: state.player.gravatarEmail,
  player: state.player,
});

export default connect(mapStateToProps, null)(Feedback);
