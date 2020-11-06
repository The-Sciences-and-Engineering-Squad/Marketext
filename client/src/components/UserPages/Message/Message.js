import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './Message.css'

export default class Message extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10" className="message-container pb-4">
            <Tab.Container defaultActiveKey="link1">
              <Row>
                <Col xs="5" sm="4" md="3">
                  <ListGroup>
                    <ListGroup.Item>
                      <h4 className="header">Messages</h4>
                    </ListGroup.Item>
                    <ListGroup.Item className="messageTab" action eventKey="link1">
                      <h5 className="past-users-messaged">User 1</h5>
                      <p className="previewText">Preview Message</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col xs="7" sm="8" md="9" className="message-screen">
                  <Tab.Content>
                    <Tab.Pane eventKey="link1">
                      <Container>
                        <Row className="message-header px-4">
                          <h3>Kevin</h3>
                        </Row>
                        <Row className="message-history">
                          Hi!
                        </Row>
                        <Row>
                          <InputGroup>
                            <FormControl as="textarea" rows={5} placeholder="Type your message..."/>
                            <InputGroup.Append>
                              <Button variant="danger" block>
                                Send
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Row>
                      </Container>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
