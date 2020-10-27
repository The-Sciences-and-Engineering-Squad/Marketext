import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';

import './Message.css'

export default class Message extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="side" xs="4" sm="3" md="2">
            <Sidebar />
          </Col>
            <Row className="messagePage">

              <Col className="messagesTab">
                <h4> Messages</h4>
              </Col>

              <Col className="messageScreen">
                <Row className="personName">
                  <h4> Kevin</h4>
                </Row>
                <Row className="messageHistory">
                </Row>
                <Row className="messageSend">
                </Row>
              </Col>
            </Row>
        </Row>
      </Container>
    );
  }
}
