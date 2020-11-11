import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import api from '../../API/api'
import './ForgotPassword.css'

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (username === "") {
      newState.errors.push("Please Enter an Username");
    }
    if(newState.errors.length === 0) {
      // Insert Backend Here.
      const data = this.state
      const API = new api();
      API.forgotPassword(data).then(error => {
        this.setState(({errors}) => ({
          errors: errors.concat(error)
        }));
      })
    }
    this.setState(newState);
  };
  
  render() {
    return (
      <div className="center">
        <Container className="container-bg rounded px-5 py-4 mx-4">
          <h2 className="text-light text-center">Forgot Password</h2>
          { this.state.errors.length > 0 ?  
            this.state.errors.map((error,index) => {
              return <li key={index} className="text-warning"> {error} </li>
          })
          : 
          <div></div>
          } 
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-light">Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" 
                onChange={this.handleChange("username")}/>
            </Form.Group>
            <Button variant="danger" type="submit" size="lg" block
              onClick={this.handleSubmit}>
              Send
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}