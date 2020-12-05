import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Manage.css'

export default class Manage extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      id: props.location.state.id,
      user1: jwt_decode(cookies.get('token')).username,
      user2: props.location.state.username,
      textbook: props.location.state.textbook,
      category: props.location.state.category,
      price: props.location.state.price,
      errors: [],
    };
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, category, price} = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (category === ""){
      newState.errors.push("Please Select a Category.");
    }
    if (price === ""){
      newState.errors.push("Please Enter the Price for the Textbook.");
    }
    if (newState.errors.length === 0){
      // Modify the information found on this id.
      console.log("ID: " + id);
      console.log("category: " + category);
      console.log("price: " + price);
    }
    this.setState(newState);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="sidebar-manage-container">
            <Sidebar className="sidebar-container-page"/>
            <Container fluid className="p-2 m-3">
              <Row className="mt-4">
                <Col xs="12" sm="4">
                  <Button as={Link} to="/Message" variant="danger">
                    Back
                  </Button>
                </Col>
                <Col xs="12" sm="8">
                  <h3 data-testid="text">Managing Textbook Between {this.state.user1} and {this.state.user2}</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-2">
                <Col>
                  <ul data-testid="errors">
                    { this.state.errors.length > 0 &&
                      this.state.errors.map((error,index) => {
                        return <li key={index} className="text-warning"> {error} </li>
                    })
                    }
                  </ul>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formTextbook">
                        <Form.Label>Textbook:</Form.Label>
                        <Form.Control data-testid="textbook" type="text" placeholder="Enter Textbook" value={this.state.textbook} readOnly/>
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formCategory">
                        <Form.Label>Category:</Form.Label>
                        <Form.Control data-testid="category" className="manageMessages-forms" as="select" value={this.state.category} onChange={this.handleChange("category")}>
                          <option value="">Choose</option>
                          <option value="Buy">Buy</option>
                          <option value="Sell">Sell</option>
                          <option value="Trade">Trade</option>
                          <option value="Swap">Swap</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formWithWho">
                        <Form.Label>With Who?</Form.Label>
                        <Form.Control data-testid="who" type="text" placeholder="Enter Username" value={this.state.user2} readOnly/>
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formNegotiatedPrice">
                        <Form.Label>Negotiated Price:</Form.Label>
                        <Form.Control data-testid="price" className="manageMessages-forms" type="text" placeholder="Enter Price" value={this.state.price} onChange={this.handleChange("price")}/>
                      </Form.Group>
                    </Form.Row>
                    <Button data-testid="confirm" variant="danger" type="submit" onClick={this.handleSubmit}>
                      Confirm
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    );
  }
}
