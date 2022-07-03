import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { saveImg } from '../redux/actions';

class Header extends React.Component {
    state = {
      gravatarEmail: '',
    }

    componentDidMount() {
      const { email, gravatarIMG } = this.props;
      const hastCreator = md5(email).toString();
      const gravatarUrl = `https://www.gravatar.com/avatar/${hastCreator}`;
      this.setState({ gravatarEmail: gravatarUrl });
      gravatarIMG(gravatarUrl);
    }

    render() {
      const { name, score } = this.props;
      const { gravatarEmail } = this.state;
      return (
        <div>
          <img
            data-testid="header-profile-picture"
            alt="gravatar"
            src={ gravatarEmail }
          />
          <h4 data-testid="header-player-name">{ name }</h4>
          <h4 data-testid="header-score">{score}</h4>
        </div>
      );
    }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarIMG: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  gravatarIMG: (state) => dispatch(saveImg(state)),
});

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
