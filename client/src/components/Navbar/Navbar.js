import React from 'react';
import { 
  Link,
  NavLink
} from 'react-router-dom';

function Navbar(props) {
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

export default Navbar;