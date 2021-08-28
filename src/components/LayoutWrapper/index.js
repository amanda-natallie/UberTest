import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './styles.css';

const LayoutWrapper = ({ children }) => (
  <main className="site-wrapper">
    <Header />
    <Sidebar />
    {children}
  </main>
    );

export default LayoutWrapper;

LayoutWrapper.propTypes = {
    children: PropTypes.node.isRequired
};
