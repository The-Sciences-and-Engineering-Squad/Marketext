import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import * as FaIcons from 'react-icons/fa';

import './Sidebar.css';

function Sidebar () {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
      <div className={sidebar ? 'navbar-button-container active' : 'navbar-button-container'}>
      <Button className={sidebar ? 'toggle-sidebar-btn active' : 'toggle-sidebar-btn'} onClick={showSidebar}> <FaIcons.FaAngleDoubleRight/></Button>
          <Navbar variant="dark" expand="lg" sticky="left" className={sidebar ? 'sidebar-container active' : 'sidebar-container'}>
            <Nav className="d-none d-block sidebar">
              <Nav.Link as={NavLink} to="/Profile" onClick={showSidebar}>Profile</Nav.Link>
              <Nav.Link as={NavLink} to="/Message" onClick={showSidebar}>Messages</Nav.Link>
              <Nav.Link as={NavLink} to="/Balance" onClick={showSidebar}>Balance</Nav.Link>
              <Nav.Link as={NavLink} to="/CurrentlyListed" onClick={showSidebar}>Currently Listed</Nav.Link>
              <Nav.Link as={NavLink} to="/TransactionHistory" onClick={showSidebar}>Transaction History</Nav.Link>
              </Nav>
        </Navbar>
      </div>
    );

}

export default Sidebar
