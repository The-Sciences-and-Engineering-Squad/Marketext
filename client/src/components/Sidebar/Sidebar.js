import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
    <Navbar variant="dark" expand="lg" sticky="left" className="navbar-expand sidebar-container">
        <Nav className="d-none d-block sidebar">
          <Nav.Link as={NavLink} to="/Profile">Profile</Nav.Link>
          <Nav.Link as={NavLink} to="/Message">Messages</Nav.Link>
          <Nav.Link as={NavLink} to="/Balance">Balance</Nav.Link>
          <Nav.Link as={NavLink} to="/CurrentlyListed">Currently Listed</Nav.Link>
          <Nav.Link as={NavLink} to="/TransactionHistory">Transaction History</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}