import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import {
  Nav,
  Navbar
} from 'react-bootstrap';

import './Navbar2.css'

// This Navbar is for the Login/Register/Forgot Password Pages.

function Navbar2(props) {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="/">
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
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav m-auto">
          <Nav.Link as={NavLink} to="/Login" style={{ marginRight: 30, marginLeft: 30 }}>Login</Nav.Link>
          <Nav.Link as={NavLink} to="/Register" style={{ marginRight: 30, marginLeft: 30 }}>Register</Nav.Link>
          <Nav.Link as={NavLink} to="/ForgotPassword" style={{ marginRight: 30, marginLeft: 30 }}>Forgot Password</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar2;
