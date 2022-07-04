import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../services/API';
import saveLogin, { saveEmail, myScore, userAssertions } from '../redux/actions';

class Login extends React.Component {
    state = {
      nameInput: '',
      email: '',
      btnPlayDisabled: true,
    }

    componentDidMount() {
      const { resetScore, resetAssertions, stateLogin, stateEmail } = this.props;
      resetScore(0);
      resetAssertions(0);
      stateLogin('');
      stateEmail('');
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
      const { history } = this.props;
      const { token } = API;
      if (!token) {
        localStorage.removeItem('token');
        history.push('/');
      }
      localStorage.setItem('token', token);
    }

    handleBtnPlay = async () => {
      const { stateLogin, stateEmail } = this.props;
      const { nameInput, email } = this.state;
      stateEmail(email);
      stateLogin(nameInput);
      await this.saveOnLocalStorage();
      const { history } = this.props;
      history.push('/game');
    }

    handleBtnConfig = () => {
      const { history } = this.props;
      history.push('/Settings');
    }

    handleRanking = () => {
      const { history } = this.props;
      history.push('/ranking');
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
            <button
              type="button"
              data-testid="btn-ranking"
              onClick={ this.handleRanking }
            >
              Ranking
            </button>
          </form>
        </div>
      );
    }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
  stateLogin: PropTypes.func.isRequired,
  stateEmail: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
  resetAssertions: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  stateLogin: (state) => dispatch(saveLogin(state)),
  stateEmail: (state) => dispatch(saveEmail(state)),
  resetScore: (state) => dispatch(myScore(state)),
  resetAssertions: (state) => dispatch(userAssertions(state)),
});

export default connect(null, mapDispatchToProps)(Login);
