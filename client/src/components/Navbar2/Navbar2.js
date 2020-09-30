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

import {
  NavLink
} from 'react-router-dom';
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

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navItem m-auto">
          <Nav.Link className="navItem" id="item1" href="/Login">Login</Nav.Link>
          <Nav.Link className="navItem" id="item2" href="/Register">Register</Nav.Link>
          <Nav.Link className="navItem" id="item3" href="/ForgotPassword">Forgot Password</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar2;
