import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const Header = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <header>
      {isAuthenticated && <img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="logo" />}
    </header>
  );
};

export default Header;
