import React from 'react';
import {
  Link
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cookies from 'universal-cookie';
import './Login.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
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
      fetch( '/auth/login',  {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
        return response.json();
      }).then((response) => {
        
        if(response['authenticated']){
          const cookies = new Cookies();
          cookies.set('username', response['username'], { path: '/' });
          window.location.href='/';
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
        <h2 className="text-light text-center">Login to Your Marketext Account</h2>
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
            <Form.Group controlId="formPassword">
              <Form.Label className="text-light">Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" 
                onChange={this.handleChange("password")}/>
            </Form.Group>
            <Button variant="danger" type="submit" size="lg" block
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
      </div>
    );
  }
}