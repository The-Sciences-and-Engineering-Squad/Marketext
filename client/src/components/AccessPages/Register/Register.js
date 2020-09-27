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
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2, errors } = this.state;
    this.setState({ errors: [] });
    if (username === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter a Username")
      }));
    }
    if (email === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter an Email")
      }));
    } 
    if (password === "" || password2 === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter a Password or Check Password Fields")
      }));
    } 
    if (password !== password2) {
      this.setState(({errors}) => ({
        errors: errors.concat("Your Password and Confirmation Password Do Not Match")
      }));
    } 
    if (errors.length === 0) {
      // Insert Backend Here.

    }
  };

  render() {
    return (
      <div className="center">
        <div className="container container-bg rounded px-5 py-4 mx-4">
          <h2 className="text-light text-center">Create Your Account</h2>
          { this.state.errors.length > 0 ?  
            this.state.errors.map((error,index) => {
              return <li key={index} className="text-warning"> {error} </li>
          })
          : 
          <div></div>
          } 
          <form>
            <div className="form-group">
              <label className="text-light">Username:</label>
              <input id="username" type="text" placeholder="Enter Username" className="form-control"
                onChange={this.handleChange("username")}/>
            </div>
            <div className="form-group">
              <label className="text-light">E-mail:</label>
              <input id="email" type="email" placeholder="Enter Email" className="form-control"
                onChange={this.handleChange("email")}/>
            </div>
            <div className="form-group">
              <label className="text-light">Password:</label>
              <input id="password" type="password" placeholder="Enter Password" className="form-control"
                onChange={this.handleChange("password")}/>
            </div>
            <div className="form-group">
              <label className="text-light">Confirm Password:</label>
              <input id="password2" type="password" placeholder="Reenter Password" className="form-control"
                onChange={this.handleChange("password2")}/>
            </div>
          </form>
          <button type="submit" className="btn btn-danger btn-lg btn-block"
            onClick={this.handleSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}