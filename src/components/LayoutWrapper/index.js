/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './styles.css';

const LayoutWrapper = ({ contentWide, children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <main className="site-wrapper">
      <Header showMenuButton={!contentWide} toggleMenu={toggleMenu} />
      <section className="content-wrapper">
        {isAuthenticated && <Sidebar closed={!contentWide && !menuOpen} />}
        <div className={`site-content ${contentWide ? 'pad-left' : null}`}>
          {children}
        </div>
      </section>
    </main>
    );
  };
export default LayoutWrapper;

LayoutWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    contentWide: PropTypes.bool
};

LayoutWrapper.defaultProps = {
    contentWide: true
};
