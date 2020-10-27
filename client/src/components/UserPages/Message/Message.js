import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import './Message.css'

export default class Message extends React.Component {
  render() {
    return (
      <Container fluid className="hello">
        <Row>
          <Col className="side" xs="4" sm="3" md="2">
            <Sidebar />
          </Col>

          <Col className="messageHistory" xs="4" sm="3" md="2">
            <Row className="messageBox">
              <h3 className="MessageHeader">Messages</h3>
            </Row>
            <Row className="messageBox">
              <div className="message">
                <h5> User 1 </h5>
                <p> Message 1 </p>
              </div>
            </Row>
            <Row className="messageBox">
              <div className="message">
                <h5> User 2 </h5>
                <p> Message 2 </p>
              </div>
            </Row>
          </Col>

          <Col className="messageScreen">
            <Row className="userMessagerContainer">
              <h3 className="messageUsername"> Kevin </h3>
            </Row>
            <Row className="messageHistoryContainer">
              Here is where the message screen
              is supposed to go.
            </Row>
            <Row className="messageInputContainer">
              <InputGroup className="messageInputGroup">
                <FormControl className="messageInputControl" placeholder="Type your message..."/>
                <Button variant="danger" className="sendMessageButton"/>
              </InputGroup>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
