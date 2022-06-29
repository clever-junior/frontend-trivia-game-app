import SAVE_LOGIN from '../actions/actionsTypes';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const reducerLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      gravatarEmail: action.email,
      name: action.nome,
    };
  default:
    return state;
  }
};

export default reducerLogin;
