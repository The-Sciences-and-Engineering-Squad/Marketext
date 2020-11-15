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

export default class Navbar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
    };
    this.setNavExpanded = this.setNavExpanded.bind(this)
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav = (e) => {
    e.preventDefault();
    this.setState({ navExpanded: false });
  }

  render(){
    return (
      <Navbar variant="dark" expand="lg" sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
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
          <Nav className="nav m-auto" onClick={this.closeNav}>
            <Nav.Link as={NavLink} to="/Login" style={{ marginRight: 30, marginLeft: 30 }}>Login</Nav.Link>
            <Nav.Link as={NavLink} to="/Register" style={{ marginRight: 30, marginLeft: 30 }}>Register</Nav.Link>
            <Nav.Link as={NavLink} to="/ForgotPassword" style={{ marginRight: 30, marginLeft: 30 }}>Forgot Password</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

