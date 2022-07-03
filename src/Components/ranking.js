import React from 'react';
import PropTypes from 'prop-types';

class RankingPlayer extends React.Component {
  render() {
    const { info, index } = this.props;
    // console.log(index);
    return (
      <div>
        <h3 key={ index }>{ info.name }</h3>
        <h4 data-testid={ `player-score-${index}` }>{ info.score }</h4>
        <img
          data-testid={ `player-score-${index}` }
          alt={ info.gravatarImg }
          src={ info.gravatarImg }
        />
      </div>
    );
  }
}

RankingPlayer.propTypes = {
  info: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RankingPlayer;
