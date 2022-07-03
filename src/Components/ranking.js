import React from 'react';
import PropTypes from 'prop-types';

class RankingPlayer extends React.Component {
  render() {
    const { info, index } = this.props;
    // console.log(index);
    console.log(info.ranking[0].name);
    return (
      <div>
        <h3
          key={ index }
          data-testid={ `player-name-${index}` }
        >
          { info.ranking[0].name }

        </h3>
        <h4 data-testid={ `player-score-${index}` }>{ info.ranking[0].score }</h4>
        <img
          alt={ info.ranking[0].picture }
          src={ info.ranking[0].picture }
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
