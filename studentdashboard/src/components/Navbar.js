import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/tutor-ins-form">Tutor Instructor Form</Link>
        </li>
        <li>
          <Link to="/tutor-retrieve-form">Tutor Retrieve Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
