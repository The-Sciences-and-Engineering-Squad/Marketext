import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      fetch( '/auth/register',  {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
        return response.json();
      }).then((response) => {

        if(response['registered']){
          this.props.history.push('/Login')
        }else{
          this.setState(({errors}) => ({
            errors: errors.concat(response['error'])
          }));

        }
      })
    }
    this.setState(newState);
  };

  render() {
    return (
      <div className="center">
        <Container className="container-bg rounded px-5 py-4 mx-4">
          <h2 className="text-light text-center">Create Your Account</h2>
          { this.state.errors.length > 0 ?
            this.state.errors.map((error,index) => {
              return <li key={index} className="text-warning"> {error} </li>
          })
          :
          <div></div>
          }
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-light">Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter Username"
                onChange={this.handleChange("username")}/>
            </Form.Group>
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
            <Form.Group controlId="formConfirmPassword">
              <Form.Label className="text-light">Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder="Reenter Password"
                onChange={this.handleChange("password2")}/>
            </Form.Group>
          </Form>
          <Button variant="danger" type="submit" size="lg" block
            onClick={this.handleSubmit}>
            Register
          </Button>
        </Container>
      </div>
    );
  }
}
