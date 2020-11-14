import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom';

import './Manage.css'

export default class Manage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "textbook": "",
      "category": "",
      "username": "",
      "price": ""
    };
  }
  
  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
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
        <Row noGutters>
          <Col xs="4" sm="3" md="2">
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10">
            <div className="manage-form-container">
              <Button variant="danger" className="back-button" as={NavLink} to="/message">
                Back
            </Button>
              <Form className="manage-form">
                <Form.Row>
                  <Form.Group as={Col} sm="12" md="6" controlId="formTextbook">
                    <Form.Label>Textbook:</Form.Label>
                    <Form.Control className="manageMessages-forms" type="text" placeholder="Enter Textbook" value={this.state.textbook} onChange={this.handleChange("textbook")}/>
                  </Form.Group>
                  <Form.Group as={Col} sm="12" md="6" controlId="formCategory">
                    <Form.Label>Category:</Form.Label>
                    <Form.Control className="manageMessages-forms" as="select" value={this.state.category} onChange={this.handleChange("category")}>
                      <option value="">Choose</option>
                      <option value="buy">Buying</option>
                      <option value="sell">Selling</option>
                      <option value="trade">Trading</option>
                      <option value="swap">Swapping</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} sm="12" md="6" controlId="formWithWho">
                    <Form.Label>With Who?</Form.Label>
                    <Form.Control className="manageMessages-forms" type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange("username")}/>
                  </Form.Group>
                  <Form.Group as={Col} sm="12" md="6" controlId="formNegotiatedPrice" value={this.state.price} onChange={this.handleChange("price")}>
                    <Form.Label>Negotiated Price:</Form.Label>
                    <Form.Control className="manageMessages-forms" type="text" placeholder="Price" />
                  </Form.Group>
                </Form.Row>
                <Button variant="danger" type="submit" className="confirm-button" onClick={this.handleSubmit}>
                  Confirm
              </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}