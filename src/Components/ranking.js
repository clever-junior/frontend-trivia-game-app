import React from 'react';
import PropTypes from 'prop-types';

class RankingPlayer extends React.Component {
  render() {
    const { info, index } = this.props;
    console.log(index);
    return (
      <div>
        <h3 key={ index }>{ info.player.name }</h3>
        <h4 data-testid={ `player-score-${index}` }>{ info.player.score }</h4>
        <img alt={ info.player.gravatarImg } src={ info.player.gravatarImg } />
      </div>
    );
  }
}

RankingPlayer.propTypes = {
  info: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RankingPlayer;
