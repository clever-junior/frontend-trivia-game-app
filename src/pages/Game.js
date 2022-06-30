import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../App.css';
import { getTrivia } from '../services/API';

class Game extends React.Component {
  state = {
    answers: [],
    contador: 0,
    next: {},
    correctAnswer: '',
    showAnswer: false,
    counter: 0,
    timer: true,
    disabledBtn: false,
  };

  async componentDidMount() {
    const { history } = this.props;
    const data = await getTrivia();
    if (!data) {
      history.push('/');
    }
    const { results } = data;
    const { contador } = this.state;
    const nextResults = results[contador];
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = nextResults;
    const questions = [correctAnswer, ...incorrectAnswers];
    // console.log(questions);
    const answersRandom = this.shuffleArray(questions);
    // console.log('random', answersRandom);
    this.setState({ next: nextResults, answers: answersRandom, correctAnswer });
    this.handleTimer();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { counter } = prevState;
  //   const trinta = 30;
  //   if (counter === trinta) {
  //     this.setState({
  //       counter: 0,
  //     }, () => this.handleAnswer());
  //   }
  // }

  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  }

handleTimer = () => {
  const ONE_SECOND = 1000;
  setInterval(
    () => this.setState((prevState) => ({
      counter: prevState.counter + 1,
    })),
    ONE_SECOND,
  );
  const a = 31000;
  setTimeout(() => {
    this.setState({
      timer: false,
      disabledBtn: true,
    }, () => this.handleAnswer());
  }, a);
}

render() {
  const { next,
    answers, correctAnswer, showAnswer, counter, timer, disabledBtn } = this.state;
  return (
    <div>
      <Header />
      <div>
        <h3 data-testid="question-category">{next.category}</h3>
        <h3 data-testid="question-text">{next.question}</h3>
      </div>
      {
        timer === true
          ? <h4>{ counter }</h4>
          : <h4>ACABOU O TEMPO</h4>
      }
      {
        showAnswer === true ? (
          answers.map((item, index) => (
            <div key={ index } data-testid="answer-options">
              {item === correctAnswer ? (
                <button
                  type="button"
                  data-testid="correct-answer"
                  className="right"
                  disabled={ disabledBtn }
                >
                  {item}

                </button>
              ) : (
                <button
                  type="button"
                  data-testid={ `wrong-answer-${index}` }
                  className="wrong"
                  disabled={ disabledBtn }
                >
                  {item}

                </button>
              )}
            </div>
          )))
          : (answers.map(
            (item, index) => (
              <div key={ index } data-testid="answer-options">
                {item === correctAnswer ? (
                  <button
                    type="button"
                    data-testid="correct-answer"
                    onClick={ this.handleAnswer }
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
            ),
          ))
      }
    </div>
  );
}
}

Game.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Game;
