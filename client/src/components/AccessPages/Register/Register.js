import React from 'react';
import './Register.css'

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input id="username" type="text" placeholder="Enter Username" className="form-control"/>
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input id="email" type="email" placeholder="Enter Email" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input id="password" type="password" placeholder="Enter Password" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input id="password2" type="password" placeholder="Reenter Password" className="form-control"/>
          </div>
        </form>
        <button type="submit" className="btn btn-danger">
          Register
        </button>
      </div>
    );
  }
}