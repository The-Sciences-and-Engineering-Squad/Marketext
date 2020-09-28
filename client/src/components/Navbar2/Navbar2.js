import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';
import './Navbar2.css'
// This Navbar is for the Login/Register/Forgot Password Pages.

function Navbar2(props) {
  return (
    <nav className="navbar navbar-custom navbar-expand-sm navbar-dark mb-3">
    <div id="navbar-icon">
      <Link className="navbar-brand" to="/">Marketext</Link>
    </div>
      <div id="navbar-items">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/ForgotPassword">
              Forgot Password
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;
