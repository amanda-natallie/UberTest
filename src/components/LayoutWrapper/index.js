/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';


import './styles.css';

const LayoutWrapper = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <main className="site-wrapper">
      <Header />
      <section className="content-wrapper">
        {isAuthenticated && <Sidebar />}
        <div className={`site-content ${isAuthenticated && 'pad-left'}`}>
          {children}
        </div>
      </section>
    </main>
    );
  };
export default LayoutWrapper;

LayoutWrapper.propTypes = {
    children: PropTypes.element.isRequired
};
