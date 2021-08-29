import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './styles.css';

const Header = ({ showMenuButton, toggleMenu }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <header>
      {showMenuButton && <button type="button" className="menu-button" onClick={() => toggleMenu()} >Toggle Menu</button>}
      {isAuthenticated && <img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="logo" />}
    </header>
  );
};

export default Header;

Header.propTypes = {
  showMenuButton: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
};

Header.defaultProps = {
  showMenuButton: false
};
