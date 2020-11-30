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
import './Message.css'
import api from '../../API/api'

export default class Message extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get('token');
    console.log(token);
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
                {sender: jwt_decode(cookies.get('token')).username, messageBody: "Hi, how much is this book?"},
                {sender: username, messageBody: "It is $25 dollars."}
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
    console.log(this.state.messages[index].type);
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
                      <h4 data-testid="text" className="header">Messages</h4>
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
                            <h3>{list.username}</h3>
                          </Row>
                          <Row className="message-history p-4">
                            <Col>
                              <Container className="message-board p-4">
                                <Row className="justify-content-center">
                                  <Col xs="auto">
                                    <h6> This is the message board regarding {list.textbook} Textbook</h6>
                                  </Col>
                                </Row>
                                <Row className="justify-content-center">
                                  <Button data-testid="manage" variant="danger" className="m-2" onClick={this.handleManage(index)}>
                                    Manage
                                  </Button>
                                  <Button data-testid="complete" variant="danger" className="m-2" onClick={this.handleComplete(index)}>
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
                          <Row>
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
          </Col>
        </Row>
      </Container>
    );
  }
}
