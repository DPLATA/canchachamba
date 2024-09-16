import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import '../../public/soccer.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={'soccer.png'} alt="DeporteTrabajo Logo" className="logo-image" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/jobs">Empleos</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          {/* Pricing, Login, and Register links removed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;