import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className="logo-image" src="https://drive.google.com/uc?export=view&id=1ti0b-pQfNl9sXLb3qf-mzBR7HoYXyb-b" alt="Logio" />
          <a className="logo-text" href="#">State Of Deep Insight</a>
        </div>
        <div className={`navbar-links ${showMenu ? 'show-menu' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/articles" className="navbar-link">Articles</Link>
          <Link to="/aboutus" className="navbar-link">About Us</Link>
          <Link to="/contactus" className="navbar-link">Contact</Link>
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className={`bar ${showMenu ? 'animate' : ''}`} />
          <div className={`bar ${showMenu ? 'animate' : ''}`} />
          <div className={`bar ${showMenu ? 'animate' : ''}`} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
