import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';
import {
  Nav,
  Navbar
} from 'react-bootstrap';
import './Navbar1.css'
import Cookies from 'universal-cookie';
// This Navbar is for the Home/Buy/Sell/Trade/Swap Pages.

function Navbar1(props) {
  // This is what you need to use to get the cookies!
  const cookies = new Cookies();
  console.log(cookies.get('username'))
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
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
        <Nav className="nav m-auto">
          <Nav.Link as={NavLink} exact to="/" style={{ marginRight: 30, marginLeft: 30 }}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/Buy" style={{ marginRight: 30, marginLeft: 30 }}>Buy</Nav.Link>
          <Nav.Link as={NavLink} to="/Sell" style={{ marginRight: 30, marginLeft: 30 }}>Sell</Nav.Link>
          <Nav.Link as={NavLink} to="/Trade" style={{ marginRight: 30, marginLeft: 30 }}>Trade</Nav.Link>
          <Nav.Link as={NavLink} to="/Swap" style={{ marginRight: 30, marginLeft: 30 }}>Swap</Nav.Link>
        </Nav>
        <Nav className="nav">
          <Nav.Link href="/Login">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        
    </Navbar>
  );
}

export default Navbar1;
