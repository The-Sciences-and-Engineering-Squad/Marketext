import React from 'react';
import {
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import api from '../../API/api'

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
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
    const { username, password } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (username === "") {
      newState.errors.push("Please Enter an Username");
    }
    if (password === "") {
      newState.errors.push("Please Enter a Password");
    }
    if(newState.errors.length === 0) {
      // Insert Backend Here.
      const data = this.state
      const API = new api();
      API.logIn(data).then( error => {
        this.setState(({errors}) => ({
          errors: errors.concat(error)
        }));
      });
    }
    this.setState(newState);
  };

  render() {
    return (
      <Container className="container-bg login-container rounded px-5 py-4 mx-4">
        <h2 className="text-light text-center">Login to Your Marketext Account</h2>
          <ul data-testid="errors">
            { this.state.errors.length > 0 &&
              this.state.errors.map((error,index) => {
                return <li key={index} className="text-warning"> {error} </li>
            })
            }
          </ul>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-light">Username:</Form.Label>
              <Form.Control data-testid="username" type="text" placeholder="Enter Username"
                onChange={this.handleChange("username")}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-light">Password:</Form.Label>
              <Form.Control data-testid="password" type="password" placeholder="Enter Password"
                onChange={this.handleChange("password")}/>
            </Form.Group>
            <Button data-testid="Login" variant="danger" type="submit" size="lg" block
              onClick={this.handleSubmit}>
              Login
            </Button>
          </Form>
          <br/>
          <p className="text-light">
            Don't have an account? <Link to="Register" className="text-danger">Sign Up</Link>
          </p>
          <Link to="ForgotPassword" className="text-danger">Forgot Your Password?</Link>
      </Container>
    );
  }
}
