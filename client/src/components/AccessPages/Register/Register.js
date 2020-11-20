import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../API/api'
import './Register.css'

export default class Register extends React.Component {
  constructor() {
    super();
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
    const { username, email, password, password2 } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (username === "") {
      newState.errors.push("Please Enter a Username");
    }
    if (email === "") {
      newState.errors.push("Please Enter an Email");
    }
    if (password === "" || password2 === "") {
      newState.errors.push("Please Enter a Password or Check Password Fields");
    }
    if (password !== password2) {
      newState.errors.push("Your Password and Confirmation Password Do Not Match");
    }
    if (newState.errors.length === 0) {
      // Insert Backend Here.
      const data = this.state
      const API = new api();
      API.register(data).then(error => {
        this.setState(({errors}) => ({
          errors: errors.concat(error)
        }));
      })
    }
    this.setState(newState);
  };

  render() {
    return (
        <Container className="container-bg register-container rounded px-5 py-4 mx-4">
          <h2 className="text-light text-center">Create Your Account</h2>
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
            <Form.Group controlId="formEmail">
              <Form.Label className="text-light">Email Address:</Form.Label>
              <Form.Control data-testid="email" type="email" placeholder="Enter Email"
                onChange={this.handleChange("email")}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-light">Password:</Form.Label>
              <Form.Control data-testid="password" type="password" placeholder="Enter Password"
                onChange={this.handleChange("password")}/>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label className="text-light">Confirm Password:</Form.Label>
              <Form.Control data-testid="password2" type="password" placeholder="Reenter Password"
                onChange={this.handleChange("password2")}/>
            </Form.Group>
            <Button data-testid="Register" variant="danger" type="submit" size="lg" block
              onClick={this.handleSubmit}>
              Register
            </Button>
          </Form>
        </Container>
    );
  }
}
