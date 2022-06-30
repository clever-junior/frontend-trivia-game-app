import SAVE_LOGIN, { MY_SCORE, USER_SCORE } from '../actions/actionsTypes';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      gravatarEmail: action.email,
      name: action.nome,
    };
  case MY_SCORE:
    return {
      ...state,
      score: action.payload,
    };
  case USER_SCORE:
    return {
      ...state,
      assertions: action.payload,
    };
  default:
    return state;
  }
};

export default player;
