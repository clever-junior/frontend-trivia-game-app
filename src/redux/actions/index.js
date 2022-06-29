import SAVE_LOGIN from './actionsTypes';

const saveLogin = (nome, email) => ({
  type: SAVE_LOGIN,
  nome,
  email,
});

export default saveLogin;
