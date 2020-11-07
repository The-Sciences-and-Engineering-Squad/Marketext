import React from 'react';
import Cookies from 'universal-cookie';
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
  componentDidMount() {
    const cookies = new Cookies();
    this.setState({ username: cookies.get('username') });
    // Insert Backend to retrieve users messages.
    this.setState({ messages: [
      { username: "Kevin",
        messagesList: [{sender: "Albert", messageBody: "Hi, how much is this book?"},
                        {sender: "Kevin", messageBody: "It is $25 dollars."}]},
      { username: "Bob",
        messagesList: [{sender: "Dor", messageBody: "Hey, can you sell this book for $10 off?"},
                       {sender: "Eddie", messageBody: "No, sorry."}]}]
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      messages: [],
    };
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10" className="message-container pb-4">
            <Tab.Container defaultActiveKey={0}>
              <Row>
                <Col xs="5" sm="4" md="3">
                  <ListGroup>
                    <ListGroup.Item>
                      <h4 className="header">Messages</h4>
                    </ListGroup.Item>
                    {
                      this.state.messages.map((list, index) => (
                        <ListGroup.Item className="messageTab" action eventKey={index} key={index}>
                          <h5 className="past-users-messaged">{list.username}</h5>
                          <p className="previewText">{list.messagesList[1]["messageBody"]}</p>
                        </ListGroup.Item>
                      ))
                    }
                  </ListGroup>
                </Col>
                <Col xs="7" sm="8" md="9" className="message-screen">
                  <Tab.Content>
                  {
                    this.state.messages.map((list, index) => (
                      <Tab.Pane eventKey={index} key={index}>
                        <Container>
                          <Row className="message-header px-4">
                            <h3>{list.username}</h3>
                          </Row>
                          <Row className="message-history p-4">

                          {
                            Array.from(list.messagesList).map((lst, i) => (
                            <Row className="message-sent p-1">
                              <p className="sender">
                                {list.messagesList[i]["sender"]}:
                              </p>
                              <p className="message-body">
                                {list.messagesList[i]["messageBody"]}
                              </p>
                            </Row>
                          ))}
                          </Row>
                          <Row>
                            <InputGroup>
                              <FormControl as="textarea" rows={5} placeholder="Type your message..."/>
                              <InputGroup.Append>
                                <Button variant="danger">
                                  Send
                                </Button>
                              </InputGroup.Append>
                            </InputGroup>
                          </Row>
                        </Container>
                      </Tab.Pane>
                    ))
                    }
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
