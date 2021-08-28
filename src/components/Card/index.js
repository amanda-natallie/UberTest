import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, children }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
    );

export default Card;

Card.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string.isRequired,
};
