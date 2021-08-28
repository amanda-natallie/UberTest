import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({
    value,
    setValue,
    ...rest
}) => (
  <input value={value} onChange={setValue} {...rest} />
    );

export default Input;

Input.propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
