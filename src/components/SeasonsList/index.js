import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentSeason } from '../../store/modules/tvShow/actions';
import { Button } from '../../components';
import './styles.css';

const SeasonsList = ({ seasons = null }) => {
    const { seasonSelected } = useSelector(state => state.tvShow);
    const dispatch = useDispatch();
    return (
      <div className="seasons-box">
        <h1>Seasons</h1>
        {new Array(seasons).fill(0).map((_, index) => {
          const isCurrent = index + 1 === seasonSelected;
          return (
            <Button
              className={`chip ${isCurrent ? 'selected' : ''}`}
              text={`Season ${index + 1}`}
              key={Math.random()}
              onClick={() => (isCurrent ? undefined : dispatch(setCurrentSeason(index + 1)))}
            />
        );
        })}
      </div>
      );
};

export default SeasonsList;

SeasonsList.propTypes = {
    seasons: PropTypes.number.isRequired,
};
