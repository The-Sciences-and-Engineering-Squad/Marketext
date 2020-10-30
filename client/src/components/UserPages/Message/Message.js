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
        <Row className="screen">
          <Col xs="4" sm="3" md="2">
            <Sidebar />
          </Col>
          <Col className="message-container">
            <Tab.Container defaultActiveKey="link1">
              <Row>
                <Col xs="5" sm="4" md="3">
                  <ListGroup>
                    <ListGroup.Item>
                      <h4 className="header"> Messages </h4>
                    </ListGroup.Item>
                    <ListGroup.Item className="messageTab" action eventKey="link1">
                      <h5 className="past-users-messaged"> User 1 </h5>
                      <p className="previewText"> Preview Message</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="messageTab" action eventKey="link2">
                      <h5 className="past-users-messaged"> User 2 </h5>
                      <p className="previewText"> Preview Message</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col className="message-screen">
                  <Tab.Content className="tab-contents">
                    <Tab.Pane eventKey="link1">
                      <Container>
                        <Row>
                          <Col>
                            <Row className="message-header px-4">
                              <h3>Kevin</h3>
                            </Row>
                            <Row className="message-history">
                            </Row>
                            <Row className="message-input">
                              <InputGroup className="message-input-group px-3">
                                <FormControl className="message-text-field m-1 px-3" placeholder="Type your message..."/>
                                <svg className="button-box m-3">
                                  <Button className="send-message-btn" href="#">
                                    <path className="btn-small" d="M   0  10
                                             L   0  60
                                             L   70  40
                                             Z"
                                          />
                                    <path className="btn-large"
                                          d="M   0  10
                                             L   0  40
                                             L   50  25
                                             Z"
                                    />
                                  </Button>
                                </svg>
                              </InputGroup>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="link2">
                    <Container>
                      <Row>
                        <Col>
                          <Row className="message-header px-4">
                            <h3>Kevin</h3>
                          </Row>
                          <Row className="message-history">
                          </Row>
                          <Row className="message-input">
                            <InputGroup className="message-input-group px-3">
                              <FormControl className="message-text-field m-1 px-3" placeholder="Type your message..."/>
                              <svg className="button-box m-3">
                                <Button className="send-message-btn" href="#">
                                  <path className="btn-small" d="M   0  10
                                           L   0  60
                                           L   70  40
                                           Z"
                                        />
                                  <path className="btn-large"
                                        d="M   0  10
                                           L   0  40
                                           L   50  25
                                           Z"
                                  />
                                </Button>
                              </svg>
                            </InputGroup>
                          </Row>
                        </Col>
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
