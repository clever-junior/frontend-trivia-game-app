import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends React.Component {
    state = {
      gravatarEmail: '',
    }

    componentDidMount() {
      const { email } = this.props;
      const hastCreator = md5(email).toString();
      console.log(this.props);
      const gravatarUrl = `https://www.gravatar.com/avatar/${hastCreator}`;
      console.log(gravatarUrl);
      this.setState({ gravatarEmail: gravatarUrl });
    }

    render() {
      const { name } = this.props;
      const { gravatarEmail } = this.state;
      return (
        <div>
          <img
            data-testid="header-profile-picture"
            alt="gravatar"
            src={ gravatarEmail }
          />
          <h4 data-testid="header-player-name">{ name }</h4>
          <h4 data-testid="header-score">0</h4>
        </div>
      );
    }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.reducerLogin.gravatarEmail,
  name: state.reducerLogin.name,
});

export default connect(mapStateToProps, null)(Header);
