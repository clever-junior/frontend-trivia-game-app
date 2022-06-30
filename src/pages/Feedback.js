import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';

class Feedback extends React.Component {
    handlePlayAgain = () => {
      const { history } = this.props;
      history.push('/');
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
          </div>
        </div>
      );
    }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Feedback);
