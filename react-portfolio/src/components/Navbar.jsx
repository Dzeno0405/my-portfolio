import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/future">Future</Link></li>
        <li><Link to="/socials">Socials</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;