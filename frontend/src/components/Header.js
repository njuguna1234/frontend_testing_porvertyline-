import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/poverty-eradication">Poverty Eradication</Link></li>
        <li><Link to="/employment-generation">Employment Generation</Link></li>
        <li><Link to="/social-integration">Social Integration</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
