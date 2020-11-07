import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Sidebar from '../../Sidebar/Sidebar';
import './CurrentlyListed.css'

export default class CurrentlyListed extends React.Component {
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
                  <h3>Your Currently Listed Textbooks</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-3">
                <Col xs="12">
                  <Table bordered hover responsive>
                    <thead>
                      <tr>
                        <th>
                          Textbook:
                        </th>
                        <th>
                          Category:
                        </th>
                        <th>
                          Price:
                        </th>
                        <th>
                          Remove:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Art 100
                        </td>
                        <td>
                          Sell
                        </td>
                        <td>
                          $100
                        </td>
                        <td className="text-center">
                          <Button variant="danger">
                            X
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </Col> 
        </Row>
      </Container>
    );
  }
}