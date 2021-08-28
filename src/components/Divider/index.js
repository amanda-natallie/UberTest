import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ height }) => (
  <div style={{ display: 'block', height, width: '100%' }} />
    );

export default Divider;

Divider.propTypes = {
    height: PropTypes.number.isRequired
};
