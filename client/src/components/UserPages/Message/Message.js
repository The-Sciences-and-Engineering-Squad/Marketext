import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import './Message.css'

export default class Message extends React.Component {
  render() {
    return (
      <Container fluid className="hello">
        <Row>
          <Col className="side" xs="4" sm="3" md="2">
            <Sidebar />
          </Col>

          <Col className="messageHistory">
            <Row>
              <h3>Messages</h3>
            </Row>
            <Row>
              <div className="messageBox">
                <h5> User 1 </h5>
                <p> Message 1 </p>
              </div>
            </Row>
            <Row>
              <div className="messageBox">
                <h5> User 2 </h5>
                <p> Message 2 </p>
              </div>
            </Row>
          </Col>

          <Col className="messageScreen">
            <Row>
              <h3> Kevin </h3>
            </Row>
            <Row>
              Here is where the message screen
              is supposed to go.
            </Row>
            <Row>
              <InputGroup className="messageInput">
                <FormControl placeholder="Type your message"/>
              </InputGroup>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
