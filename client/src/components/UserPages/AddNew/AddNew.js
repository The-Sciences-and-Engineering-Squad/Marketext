import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './AddNew.css'

export default class AddNew extends React.Component {
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
                  <Button variant="danger">Back</Button>
                </Col>
                <Col xs="12" sm="8">
                  <h3>Add a Textbook To Your Listing</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-4">
                <Col>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} xs="12" md="5" controlId="formTextbook">
                        <Form.Label>Textbook Title:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Textbook Title" />
                      </Form.Group>
                      <Form.Group as={Col} xs="12" md="5" controlId="formAuthor">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Author" />
                      </Form.Group>
                      <Form.Group as={Col} xs="12" md="2" controlId="formEdition">
                        <Form.Label>Edition:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Edition" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} xs="12" md="6" controlId="formISBN">
                        <Form.Label>ISBN:</Form.Label>
                        <Form.Control type="text" placeholder="Enter ISBN" />
                      </Form.Group>
                      <Form.Group as={Col} xs="12" md="6" controlId="formCondition">
                        <Form.Label>Condition:</Form.Label>
                        <Form.Control type="text" maxLength="10" placeholder="Enter Condition" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} xs="12" md="6" controlId="formList">
                        <Form.Label>Category:</Form.Label>
                        <Form.Control as="select">
                          <option value="">Choose</option>
                          <option value="Buy">Buy</option>
                          <option value="Sell">Sell</option>
                          <option value="Trade">Trade</option>
                          <option value="Swap">Swap</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col} xs="12" md="6" controlId="formPrice">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} xs="12" controlId="formInformation">
                        <Form.Label>Additional Information:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form.Row>
                    <Button className="float-right" variant="danger" type="submit">Add To Listings</Button>
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