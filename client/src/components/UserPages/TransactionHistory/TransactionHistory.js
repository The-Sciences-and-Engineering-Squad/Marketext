import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';

import './TransactionHistory.css'

export default class TransactionHistory extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">      
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10">
            This is the Transaction History Page
          </Col> 
        </Row>
      </Container>
    );
  }
}