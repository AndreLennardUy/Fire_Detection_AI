import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/flames.png';
import './css/navbar.css';

export const Navbar = ({ activeRoute }) => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="navbar-logo" />
        <Link to="/" className={`navbar-link ${activeRoute === '/' ? 'active' : ''}`}>
          About
        </Link>
        <Link
          to="/fire-detection"
          className={`navbar-link ${activeRoute === '/fire-detection' ? 'active' : ''}`}
        >
          Fire Detection
        </Link>
      </nav>
    </>
  );
};
