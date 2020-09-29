import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';
import './Navbar2.css'
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
// This Navbar is for the Login/Register/Forgot Password Pages.

function Navbar2(props) {
  return (
    <div id="box">
    <Navbar className="navbar m-auto navbar-dark" expand="lg">
        <Navbar.Brand className="navItem" href="#home">Marketext</Navbar.Brand>
         <Navbar.Toggle>

        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
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
            <li className="nav-item" id="thirditem">
              <NavLink className="nav-link" exact to="/ForgotPassword">
              Forgot Password
              </NavLink>
            </li>
          </ul>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
