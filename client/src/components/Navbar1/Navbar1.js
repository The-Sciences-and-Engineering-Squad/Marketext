import React from 'react';
import { 
  Link,
  NavLink
} from 'react-router-dom';
import './Navbar1.css'
// This Navbar is for the Home/Buy/Sell/Trade/Swap Pages.

function Navbar1(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Marketext</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar1;