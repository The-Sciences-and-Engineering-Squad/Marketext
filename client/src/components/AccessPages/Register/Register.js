import React from 'react';
import './Register.css'

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input id="username" type="text"/>
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input id="email" type="email"/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input id="password" type="password"/>
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input id="password2" type="password"/>
          </div>
        </form>
        <button type="submit">
          Register
        </button>
      </div>
    );
  }
}