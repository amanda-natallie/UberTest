import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Card, Divider } from '../../components/';
import noCover from '../../images/no-image.jpg';

const CardList = ({ tvShowList }) => {
    const b = tvShowList;

    return (
      <>
        <div className="tvshow-header">
          <h1> {b.name} </h1>
          <div className="header">
            <div className="header-left">
              <img src={b.image.original} alt={b.name} />
            </div>
            <div className="header-right">
              <p>{b.summary}</p>
            </div>
          </div>
        </div>
        <Divider height={100} />
        {// eslint-disable-next-line no-underscore-dangle
        b._embedded.episodes.map((item) => (
          <Card key={b.id} className="episode-card" >
            <>
              <div className="episode-card-left">
                <img src={item.image ? item.image.original : noCover} alt={item.name} />
              </div>
              <div className="episode-card-right">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </div>
            </>
          </Card>
      ))}
      </>
    );
};

export default CardList;

CardList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    tvShowList: PropTypes.any.isRequired
};