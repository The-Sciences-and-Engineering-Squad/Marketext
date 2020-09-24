import React from 'react';
import './Register.css'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (username === "") {
      alert("Please Enter a Username");
    } else if (email === "") {
      alert("Please Enter a Email");
    } else if (password === "") {
      alert("Please Enter a Password");
    } else if (password !== password2) {
      alert("Your Password and Confirmation Password Do Not Match.");
    } else {
      // Insert Backend Here.

    }
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input id="username" type="text" placeholder="Enter Username" className="form-control"
              onChange={this.handleChange("username")}/>
          </div>
          <div className="form-group">
            <label>E-mail:</label>
            <input id="email" type="email" placeholder="Enter Email" className="form-control"
              onChange={this.handleChange("email")}/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input id="password" type="password" placeholder="Enter Password" className="form-control"
              onChange={this.handleChange("password")}/>
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input id="password2" type="password" placeholder="Reenter Password" className="form-control"
              onChange={this.handleChange("password2")}/>
          </div>
        </form>
        <button type="submit" className="btn btn-danger"
          onClick={this.handleSubmit}>
          Register
        </button>
      </div>
    );
  }
}