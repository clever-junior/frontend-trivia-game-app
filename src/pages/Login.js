import React from 'react';
import PropTypes from 'prop-types';
import getToken from '../services/API';

class Login extends React.Component {
    state = {
      nameInput: '',
      email: '',
      btnPlayDisabled: true,
    }

    handleChange = ({ target }) => {
      const { name, value } = target;
      const { nameInput, email } = this.state;
      if (nameInput.length > 0 && email.length > 0) {
        this.setState({ btnPlayDisabled: false });
      }
      this.setState({ [name]: value });
    }

    saveOnLocalStorage = async () => {
      const API = await getToken();
      const { token } = API;
      localStorage.setItem('token', token);
    }

    handleBtnPlay = async () => {
      await this.saveOnLocalStorage();
      const { history } = this.props;
      history.push('/game');
    }

    handleBtnConfig = () => {
      const { history } = this.props;
      history.push('/Settings');
    }

    render() {
      const { nameInput, email, btnPlayDisabled } = this.state;
      return (
        <div>
          <form>
            <input
              type="text"
              name="nameInput"
              value={ nameInput }
              placeholder="Digite o seu nome"
              data-testid="input-player-name"
              onChange={ this.handleChange }
            />
            <input
              type="email"
              name="email"
              value={ email }
              placeholder="Digite o seu email"
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
            />
            <button
              data-testid="btn-play"
              type="button"
              value="btn-play"
              onClick={ this.handleBtnPlay }
              disabled={ btnPlayDisabled }
            >
              Play
            </button>
            <button
              type="button"
              data-testid="btn-settings"
              onClick={ this.handleBtnConfig }
            >
              Configurações
            </button>
          </form>
        </div>
      );
    }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
