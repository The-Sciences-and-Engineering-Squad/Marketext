import React from 'react';
import './Login.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
  };

  render() {
    return (
      <div className="center">
        <div className="container container-bg rounded px-5 py-4 mx-4">
          <form>
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
          </form>
          <button type="submit" className="btn btn-danger btn-lg btn-block"
            onClick={this.handleSubmit}>
            Login
          </button>
          <br/>
          <label className="text-light">Don't have an account? <a href="Register"><span>Sign Up</span></a></label>  
          <br/>
          <a href="ForgotPassword"><span>Forgot Your Password?</span></a>
        </div>
      </div>
    );
  }
}