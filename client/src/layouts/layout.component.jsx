import React from 'react';
import NavBar from '../components/navbar/navbar.component.jsx';
import './layout.styles.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
