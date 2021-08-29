import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({
    value,
    setValue,
    isValid,
    ...rest
}) => (
  <input value={value} onChange={setValue} {...rest} className={!isValid ? 'invalid-input' : undefined} />
    );

export default Input;

Input.propTypes = {
    isValid: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

Input.defaultProps = {
    isValid: true
};
