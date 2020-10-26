import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './Balance.css'

export default class Balance extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">      
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10">
            <Container fluid>
              <Row className="mt-4 justify-content-center">
                <Col xs="auto">
                  <h3>Current Balance: $20</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-4">
                <Form as={Col} sm="12" md="6">
                  <label>Add to Balance:</label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="number" min="0.00" step="0.01" placeholder="Amount" />
                    <InputGroup.Append>
                      <Button variant="danger" type="submit">Add</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </Row>
              <Row className="py-4">
                <Form as={Col} sm="12" md="6">
                  <label>Deposit to Account:</label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="number" min="0.00" step="0.01" placeholder="Amount" />
                    <InputGroup.Append>
                      <Button variant="danger" type="submit">Deposit</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </Row>
            </Container>
          </Col> 
        </Row>
      </Container>
    );
  }
}