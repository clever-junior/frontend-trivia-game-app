import SAVE_LOGIN, { MY_SCORE, USER_SCORE, SAVE_EMAIL, SAVE_IMG } from './actionsTypes';

const saveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export default saveLogin;

export const myScore = (payload) => ({
  type: MY_SCORE,
  payload,
});

export const userAssertions = (payload) => ({
  type: USER_SCORE,
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

export const saveImg = (payload) => ({
  type: SAVE_IMG,
  payload,
});
