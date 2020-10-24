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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown'
// This Navbar is for the Home/Buy/Sell/Trade/Swap Pages.

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <a href="" ref={ref} onClick={(e) => {
    e.preventDefault()
    onClick(e)
  }}>
    <FontAwesomeIcon size="lg" icon={faUserCircle} />
  </a>
));

function Navbar1(props) {
  // This is what you need to use to get the cookies!
  const cookies = new Cookies();
  const username = cookies.get('username');
  console.log(username)
  return (
    <Navbar expand="lg" sticky="top">
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
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="nav m-auto">
          <Nav.Link as={NavLink} exact to="/" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/Buy" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Buy</Nav.Link>
          <Nav.Link as={NavLink} to="/Sell" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Sell</Nav.Link>
          <Nav.Link as={NavLink} to="/Trade" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Trade</Nav.Link>
          <Nav.Link as={NavLink} to="/Swap" className="nav-basic" style={{ marginRight: 30, marginLeft: 30 }}>Swap</Nav.Link>
        </Nav>
        {username ?
          <Nav className="nav">
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight="true">
              <Dropdown.Item eventKey="1">Signed in as {username}<hr/></Dropdown.Item>
                <Nav>
                  <Nav.Link href="/Profile" className="nav-dropdownmenu">Your Profile</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/Messages" className="nav-dropdownmenu">Your Messages</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/Balance" className="nav-dropdownmenu">Your Balance</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/CurrentlyListed" className="nav-dropdownmenu">Your Currently Listed</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/TransactionHistory" className="nav-dropdownmenu">Your Transaction History</Nav.Link>
                </Nav>
                <hr/>
                <Nav>
                  <Nav.Link href="/Login" className="nav-dropdownmenu">Sign Out</Nav.Link>
                </Nav>
              </Dropdown.Menu>
            </Dropdown>
          </Nav> :
          <Nav className="nav">
            <Nav.Link href="/Login">Sign In</Nav.Link>
          </Nav>}
      </Navbar.Collapse>

    </Navbar>
  );
}

export default Navbar1;
