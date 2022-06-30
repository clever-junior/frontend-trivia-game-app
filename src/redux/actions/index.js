import SAVE_LOGIN, { MY_SCORE } from './actionsTypes';

const saveLogin = (nome, email) => ({
  type: SAVE_LOGIN,
  nome,
  email,
});

export default saveLogin;

export const myScore = (payload) => ({
  type: MY_SCORE,
  payload,
});

export const myPunctuation = (state) => (dispatch) => {
  const dez = 10;
  const tres = 3;
  const { lastScore } = state;
  if (state.difficulty === 'easy') {
    const resultado = lastScore + dez + (state.counter * 1);
    dispatch(myScore(resultado));
  }
  if (state.difficulty === 'medium') {
    const resultado = lastScore + dez + (state.counter * 2);
    dispatch(myScore(resultado));
  }
  if (state.difficulty === 'hard') {
    const resultado = lastScore + dez + (state.counter * tres);
    dispatch(myScore(resultado));
  }
};
