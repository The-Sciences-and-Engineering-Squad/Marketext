import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import {
  Nav,
  Navbar
} from 'react-bootstrap';
import './Navbar1.css'
// This Navbar is for the Home/Buy/Sell/Trade/Swap Pages.

function Navbar1(props) {
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
        <Nav className="nav m-auto" id="homepage-navbar">
          <Nav.Link id="Home" as={NavLink} to="/Home">Home</Nav.Link>
          <Nav.Link id="Buy" as={NavLink} to="/Buy">Buy</Nav.Link>
          <Nav.Link id="Sell" as={NavLink} to="/Sell">Sell</Nav.Link>
          <Nav.Link id="trade" as={NavLink} to="/Trade">Trade</Nav.Link>
          <Nav.Link id="swap" as={NavLink} to="/Swap">Swap</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/login">
        Sign In
      </Navbar.Brand>
    </Navbar>
  );
}

export default Navbar1;
