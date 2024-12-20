import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/future" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Future
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
