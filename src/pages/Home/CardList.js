import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Card } from '../../components/';

const CardList = ({ tvShowList }) => {
    const bar = tvShowList.name;

    return (
      <Card className="tvshow-header">
        <h1> {bar} </h1>
      </Card>
    );
};

export default CardList;

CardList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    tvShowList: PropTypes.any.isRequired
};
