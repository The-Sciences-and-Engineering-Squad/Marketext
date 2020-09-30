import React from 'react';
import {
  Link,NavLink
} from 'react-router-dom';
import './Navbar2.css'
import {
  Nav,
  Navbar,
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

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav m-auto">
          <Nav.Link as={Link,NavLink} to="/Login">Login</Nav.Link>
          <Nav.Link as={Link,NavLink} to="/Register">Register</Nav.Link>
          <Nav.Link as={Link,NavLink} to="/ForgotPassword">Forgot Password</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar2;
