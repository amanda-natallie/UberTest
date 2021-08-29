import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ text, action, ...rest }) => (
  <button onClick={action} {...rest}>{text}</button>
 );

export default Button;

Button.propTypes = {
    action: PropTypes.func,
    text: PropTypes.string.isRequired,
};
Button.defaultProps = {
    action: () => {}
};
