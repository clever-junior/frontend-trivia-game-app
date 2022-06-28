import React from 'react';

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

    handleBtnPlay = () => {}

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
          </form>
        </div>
      );
    }
}

export default Login;
