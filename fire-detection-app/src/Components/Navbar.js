import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/flames.png';
import './css/navbar.css';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="navbar-logo" />
        <Link to="/" className="navbar-link-about">About</Link>
        <Link to="/Fire Detection" className="navbar-link-fire">Fire Detection</Link>
      </nav>
    </>
  );
};