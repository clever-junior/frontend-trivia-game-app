import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { getTrivia } from '../services/API';

class Game extends React.Component {
  state = {
    answers: [],
    contador: 0,
    next: {},
    correctAnswer: '',
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
    console.log(questions);
    const answersRandom = this.shuffleArray(questions);
    console.log('random', answersRandom);
    this.setState({ next: nextResults, answers: answersRandom, correctAnswer });
  }

  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  render() {
    const { next, answers, correctAnswer } = this.state;
    return (
      <div>
        <Header />
        <div>
          <h3 data-testid="question-category">{next.category}</h3>
          <h3 data-testid="question-text">{next.question}</h3>
        </div>
        {answers.map((item, index) => (
          <div key={ index } data-testid="answer-options">
            {item === correctAnswer ? (
              <button type="button" data-testid="correct-answer">{item}</button>
            ) : (
              <button
                type="button"
                data-testid={ `wrong-answer-${index}` }
              >
                {item}

              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Game;
