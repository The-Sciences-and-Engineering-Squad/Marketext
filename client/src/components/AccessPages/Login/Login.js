import React from 'react';
import {
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    const { email, password } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (email === "") {
      newState.errors.push("Please Enter an Email");
    }
    if (password === "") {
      newState.errors.push("Please Enter a Password");
    }
    if(newState.errors.length === 0) {
      // Insert Backend Here.
      
    }
    this.setState(newState);
  };

  render() {
    return (
      <div className="center">
        <Container className="container-bg rounded px-5 py-4 mx-4">
        <h2 className="text-light text-center">Login to Your Marketext Account</h2>
          { this.state.errors.length > 0 ?  
            this.state.errors.map((error,index) => {
              return <li key={index} className="text-warning"> {error} </li>
          })
          : 
          <div></div>
          } 
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-light">Email Address:</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" 
                onChange={this.handleChange("email")}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-light">Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" 
                onChange={this.handleChange("password")}/>
            </Form.Group>
          </Form>
          <Button variant="danger" type="submit" size="lg" block
            onClick={this.handleSubmit}>
            Login
          </Button>
          <br/>
          <p className="text-light">
            Don't have an account? <Link to="Register" className="text-danger">Sign Up</Link>
          </p>  
          <Link to="ForgotPassword" className="text-danger">Forgot Your Password?</Link>
        </Container>
      </div>
    );
  }
}