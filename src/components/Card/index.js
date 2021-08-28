import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, children, ...rest }) => (
  <div className={`card ${className}`} {...rest}>
    {children}
  </div>
    );

export default Card;

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
};
