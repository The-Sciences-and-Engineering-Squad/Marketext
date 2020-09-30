import React from 'react';
import {
  Link
} from 'react-router-dom';
import './Navbar2.css'
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';
// This Navbar is for the Login/Register/Forgot Password Pages.

function Navbar2(props) {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={require ('../../public/logo192.png')}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Marketext
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavItem className="navbar-nav">
            <Nav.Link as={Link} to="/Login">
              Login
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/Register">
              Register
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/ForgotPassword">
              Forgot Password
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar2;
