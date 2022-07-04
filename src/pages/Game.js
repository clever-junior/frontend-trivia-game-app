import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import '../App.css';
import { getTrivia } from '../services/API';
import { myPunctuation, userAssertions } from '../redux/actions/index';

class Game extends React.Component {
  state = {
    answers: [],
    contador: 0,
    correctAnswer: '',
    showAnswer: false,
    counter: 30,
    result: [],
    assertions: 0,
  };

  stopTimer = 0;

  async componentDidMount() {
    const { history } = this.props;
    const data = await getTrivia();
    if (!data) {
      history.push('/');
    }
    const { results } = data;
    this.setState({
      result: results,
    }, () => this.handleData());
    this.handleTimer();
  }

  handleData = () => {
    const { contador, result } = this.state;
    const nextResults = result[contador];
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      difficulty,
    } = nextResults;
    const questions = [correctAnswer, ...incorrectAnswers];
    const answersRandom = this.shuffleArray(questions);
    this.setState({
      answers: answersRandom,
      correctAnswer,
      difficulty,
    });
  }

  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleAnswer = () => {
    clearInterval(this.stopTimer);
    this.setState({
      showAnswer: true,
      counter: 0,
    });
  };

  handleTimer = () => {
    const ONE_SECOND = 1000;
    this.stopTimer = setInterval(
      () => this.setState((prevState) => ({
        counter: prevState.counter - 1,
      })),
      ONE_SECOND,
    );
  };

    handlePunctuation = () => {
      const { mapDispatch, lastScore } = this.props;
      const { counter, difficulty } = this.state;
      const resultados = { counter, difficulty, lastScore };
      mapDispatch(resultados);
      this.handleAnswer();
      this.setState((prev) => ({
        assertions: prev.assertions + 1,
      }), () => this.handleGambis());
    };

    handleGambis = () => {
      const { assertions } = this.state;
      const { mapAssertions } = this.props;
      mapAssertions(assertions);
    };

    handleNext = () => {
      this.setState((prev) => ({
        contador: prev.contador + 1,
        showAnswer: false,
        counter: 30,
      }), () => this.handleData());
      this.handleTimer();
      const { history } = this.props;
      const tres = 3;
      const { contador } = this.state;
      if (contador > tres) {
        history.push('/feedback');
        // console.log(history);
      }
    }

    render() {
      const { answers,
        correctAnswer,
        showAnswer,
        counter,
        contador,
        result } = this.state;
      if (counter === 0) {
        clearInterval(this.stopTimer);
      }
      return (
        <div>
          <Header />
          <div>
            <h3 data-testid="question-category">{result[contador]?.category}</h3>
            <h3 data-testid="question-text">{result[contador]?.question}</h3>
          </div>
          {counter !== 0 ? <h4>{counter}</h4> : <h4>ACABOU O TEMPO</h4>}
          {showAnswer === true || counter === 0
            ? answers.map((item, index) => (
              <div key={ index } data-testid="answer-options">
                {item === correctAnswer ? (
                  <button
                    type="button"
                    data-testid="correct-answer"
                    className="right"
                    disabled
                  >
                    {item}
                  </button>
                ) : (
                  <button
                    type="button"
                    data-testid={ `wrong-answer-${index}` }
                    className="wrong"
                    disabled
                  >
                    {item}
                  </button>
                )}
              </div>
            ))
            : answers.map((item, index) => (
              <div key={ index } data-testid="answer-options">
                {item === correctAnswer ? (
                  <button
                    type="button"
                    data-testid="correct-answer"
                    onClick={ this.handlePunctuation }
                  >
                    {item}
                  </button>
                ) : (
                  <button
                    type="button"
                    data-testid={ `wrong-answer-${index}` }
                    onClick={ this.handleAnswer }
                  >
                    {item}
                  </button>
                )}
              </div>
            ))}
          {showAnswer === true || counter === 0
            ? (
              <button
                data-testid="btn-next"
                type="button"
                onClick={ this.handleNext }
              >
                Next

              </button>
            )
            : <div />}
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  lastScore: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  mapDispatch: (state) => dispatch(myPunctuation(state)),
  mapAssertions: (state) => dispatch(userAssertions(state)),
});

Game.propTypes = {
  history: PropTypes.func.isRequired,
  mapDispatch: PropTypes.func.isRequired,
  lastScore: PropTypes.number.isRequired,
  mapAssertions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
