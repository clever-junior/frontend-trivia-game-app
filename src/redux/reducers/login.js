import SAVE_LOGIN,
{ MY_SCORE, USER_SCORE, SAVE_EMAIL, SAVE_IMG } from '../actions/actionsTypes';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  gravatarImg: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      name: action.payload,
    };
  case SAVE_EMAIL:
    return {
      ...state,
      gravatarEmail: action.payload,
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
  case SAVE_IMG:
    return {
      ...state,
      gravatarImg: action.payload,
    };
  default:
    return state;
  }
};

export default player;
