import SAVE_LOGIN from './actionsTypes';

const saveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});

export default saveLogin;
