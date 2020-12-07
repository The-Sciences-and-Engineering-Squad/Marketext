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
import jwt_decode from "jwt-decode";

import api from '../../API/api';
import './Message.css';

export default class Message extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    if(cookies.get('token')){
      this.setState({ currentUser: jwt_decode(cookies.get('token')).username });
    }
    // Insert Backend to retrieve users messages.
    const API = new api();
    API.getContact({token: cookies.get('token')}).then(list => {
      let listMessages = []
      for(let i = 0;i < list.length;i++){
          API.getUserName({userId: list[i]['userTwoId']}).then(username => {
            API.getBookDetails(list[i]['ISBN']).then(book => {
            listMessages.push(
              { username: username,
              id: list[i]['listedId'],
              messagesList: [
                {sender: username, messageBody: `Hi. I see that you're interested in ${book['title']}`},
              ],
              textbook: book['title'],
              category: list[i]['category'],
              price: list[i]['price'],
              type: "",
              userOneId: jwt_decode(cookies.get('token')).userId,
              userTwoId: list[i]['userTwoId'],
              ISBN: list[i]['ISBN']
            }
            )
            this.setState({ messages: listMessages})
          })
        })
        
      }  
    })
  }

  constructor() {
    super();
    this.state = {
      currentUser: "",
      messages: []
    };
  }

  handleManage = (index) => (e) => {
    e.preventDefault();
    // Head over to manage page using current messages information
    this.props.history.push({
      pathname: 'Message/Manage',
      state: this.state.messages[index]
    })
  }

  handleComplete = (index) => (e) => {
    e.preventDefault();
    // Insert Backend to mark this textbook as completed transaction.
    // Performing a trade, subtracting balance from user and adding it to the other user.
    // Both have to agree that the transaction has been completed.
    console.log(this.state.messages[index]);

    const data = this.state.messages[index]
    const API = new api();

    API.addTransaction(data).then( error => {
      this.setState({ errors:  error });
    })

    API.removeListing(data).then( error => {
      this.setState({ errors:  error });
    })

   
  }

  // Handle field change
  handleType = (index) => (e) => {
    var newState = Object.assign({}, this.state);
    newState.messages[index].type = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (index) => (e) => {
    e.preventDefault();
    // Insert Backend to Submit this message
    var newState = Object.assign({}, this.state);
    newState.messages[index].messagesList.push({sender: this.state.currentUser, messageBody: newState.messages[index].type})
    newState.messages[index].type = "";
    this.setState({ newState })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="sidebar-message-board-container">
            <Sidebar className="sidebar-container-page"/>
            <Container fluid className="message-board-container">
              <Tab.Container defaultActiveKey={0}>
                <Row>
                  <Col xs="5" sm="4" md="3" className="past-users-messaged-container">
                    <ListGroup>
                      <ListGroup.Item>
                        <h4 data-testid="text" className="user-list-messages-header">Messages</h4>
                      </ListGroup.Item>
                      {
                        this.state.messages.map((list, index) => (
                          <ListGroup.Item className="messageTab" action eventKey={index} key={index}>
                            <h5 className="past-users-messaged">{list.username}</h5>
                            <p className="previewText">{list.messagesList[list.messagesList.length-1].messageBody}</p>
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
                              <h3 className="message-header-tag">{list.username}</h3>
                            </Row>
                            <Row className="message-history">
                              <Col>
                                <Container className="message-board">
                                  <Row className="justify-content-center">
                                    <Col xs="auto">
                                      <h6> This is the message board regarding {list.textbook} Textbook</h6>
                                    </Col>
                                  </Row>
                                  <Row className="justify-content-center">
                                    <Button data-testid="manage" variant="danger" className="manage-btn" onClick={this.handleManage(index)}>
                                      Manage
                                    </Button>
                                    <Button data-testid="complete" variant="danger" className="mark-as-completed-btn" onClick={this.handleComplete(index)}>
                                      Mark As Completed
                                    </Button>
                                  </Row>
                                </Container>
                              </Col>
                              {
                                list.messagesList.map((list2, index2) => (
                                  <Col xs="12" key={index2}>
                                    <p>
                                      <b>{list2.sender}:</b> {list2.messageBody}
                                    </p>
                                  </Col>
                                ))
                              }
                            </Row>
                            <Row className="send-message-area">
                              <InputGroup>
                                <FormControl data-testid="chat" as="textarea" rows={5} placeholder="Type your message..." value={list.type} onChange={this.handleType(index)}/>
                                <InputGroup.Append>
                                  <Button data-testid="send" variant="danger" type="submit" onClick={this.handleSubmit(index)}>
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
            </Container>
          </div>
        </Row>
      </Container>
    );
  }
}
