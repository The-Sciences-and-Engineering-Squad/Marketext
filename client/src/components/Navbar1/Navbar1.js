import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';
import {
  Nav,
  Navbar
} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";
import './Navbar1.css'
// This Navbar is for the Home/Buy/Sell/Trade/Swap Pages.

export default class Navbar1 extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    if(cookies.get('token')){
      this.setState({ username: jwt_decode(cookies.get('token')).username});
    }
  }

  constructor() {
    super();
    this.state = {
      navExpanded: false,
      username: undefined,
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

  signOut = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    cookies.remove('token');
    window.location.href='/';
  }
  
  render(){
    // This is what you need to use to get the cookies!
    return (
      <Navbar expand="lg" sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Navbar.Brand as={Link} to="/" className="nav-basic">
          <img
            alt=""
            src={require('../../public/logo192.png')}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Marketext
        </Navbar.Brand>
        <Navbar.Toggle data-testid="toggle"/>
        <Navbar.Collapse>
          <Nav data-testid="close" className="nav m-auto" onClick={this.closeNav}>
            <Nav.Link as={NavLink} exact to="/" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Buy" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Buy</Nav.Link>
            <Nav.Link as={NavLink} to="/Sell" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Sell</Nav.Link>
            <Nav.Link as={NavLink} to="/Trade" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Trade</Nav.Link>
            <Nav.Link as={NavLink} to="/Swap" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Swap</Nav.Link>
          </Nav>
          {this.state.username ?
            <Nav data-testid="close" onClick={this.closeNav}>
              <Dropdown>
                <Dropdown.Toggle className="dropdown-background">
                  <FontAwesomeIcon size="lg" icon={faUserCircle} />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight="true">
                  <Dropdown.Item disabled>Signed in as {this.state.username}</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/Profile">
                    Your Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Message">
                    Your Messages
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/Balance">
                    Your Balance
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/CurrentlyListed">
                    Your Currently Listed
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/TransactionHistory">
                    Your Transaction History
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item data-testid="signOut" onClick={this.signOut}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            :
            <Nav className="nav">
              <Nav.Link href="/Login" className="nav-basic">Sign In</Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}