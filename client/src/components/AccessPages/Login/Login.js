import React from 'react';
import './Login.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
    const { email, password, errors } = this.state;
    this.setState( {errors: []} );
    if (email === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter an Email")
      }));
    }
    if (password === "") {
      this.setState(({errors}) => ({
        errors: errors.concat("Please Enter a Password")
      }));
    }
    if(errors.length === 0) {
      // Insert Backend Here.
      
    }
  };

  render() {
    return (
      <div className="center">
        <div className="container container-bg rounded px-5 py-4 mx-4">
        <h2 className="text-light text-center">Login to Your Marketext Account</h2>
          { this.state.errors.length > 0 ?  
            this.state.errors.map((error,index) => {
              return <li key={index} className="text-warning"> {error} </li>
          })
          : 
          <div></div>
          } 
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
          <label className="text-light">Don't have an account? <a href="Register" className="text-danger">Sign Up</a></label>  
          <br/>
          <a href="ForgotPassword" className="text-danger">Forgot Your Password?</a>
        </div>
      </div>
    );
  }
}