import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Card } from '../../components/';

const CardList = ({ tvShowList }) => {
    const bar = tvShowList.name;

    return (
      <Card className="tvshow-header">
        <p> {bar}</p>
      </Card>
    );
};

export default CardList;

CardList.propTypes = {
    tvShowList: PropTypes.objectOf(PropTypes.object).isRequired
};
