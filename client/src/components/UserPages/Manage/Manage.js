import React from 'react';
import { Link } from 'react-router-dom';
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
    this.state = {
      user1: "",
      user2: "",
      textbook: "",
      category: "",
      price: "",
    };
  }
  
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // log the state for debugging:
    console.log(this.state);
    
    //backend will start here
  }
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10">
            <Container fluid>
              <Row className="mt-4">
                <Col xs="12" sm="4">
                  <Button as={Link} to="/Message" variant="danger">
                    Back
                  </Button>
                </Col>
                <Col xs="12" sm="8">
                  <h3>Managing Textbook Between {this.state.user1} and {this.state.user2}</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-2">
                <Col>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formTextbook">
                        <Form.Label>Textbook:</Form.Label>
                        <Form.Control className="manageMessages-forms" type="text" placeholder="Enter Textbook" value={this.state.textbook} onChange={this.handleChange("textbook")}/>
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formCategory">
                        <Form.Label>Category:</Form.Label>
                        <Form.Control className="manageMessages-forms" as="select" value={this.state.category} onChange={this.handleChange("category")}>
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
                        <Form.Control type="text" placeholder="Enter Username" value={this.state.user2} readOnly/>
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formNegotiatedPrice">
                        <Form.Label>Negotiated Price:</Form.Label>
                        <Form.Control className="manageMessages-forms" type="text" placeholder="Enter Price" value={this.state.price} onChange={this.handleChange("price")}/>
                      </Form.Group>
                    </Form.Row>
                    <Button variant="danger" type="submit" onClick={this.handleSubmit}>
                      Confirm
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}