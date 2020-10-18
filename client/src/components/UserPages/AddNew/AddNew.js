import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';

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
            This is the Add New Page
          </Col> 
        </Row>
      </Container>
    );
  }
}