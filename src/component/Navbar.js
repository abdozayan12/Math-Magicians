import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="wrapper navbar-wrapper">
        <h2>
          Math
          <br />
          Magician
        </h2>
        <div className="link-wrapper">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/quote">Quote</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
