import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import api from '../../API/api'
import './Textbooks.css'

export default class Textbooks extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const path = window.location.pathname.split('/')
    const page = path[1];
    this.setState({ page: page })
    let data = null
    const API = new api();
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(response => response.json())
    .then(result => {
      if(result.items !== null){
        let hasISBN = result.volumeInfo.industryIdentifiers;
        data = {page: page, ISBN: result.volumeInfo.industryIdentifiers[1]['identifier']}
        this.setState({ textbook: {
          title: result.volumeInfo.title,
          author: result.volumeInfo.authors, 
          image: result.volumeInfo.imageLinks.thumbnail,
          description: result.volumeInfo.description,
          ISBN: hasISBN !== undefined ? result.volumeInfo.industryIdentifiers:null, 
        }
        })
      }
      API.showList(data).then(list => {
        let listBooks = []
        for(let i = 0;i < list.length;i++){
            API.getUserName({userId: list[i]['userId']}).then(username => {
              listBooks.push({listedId: list[i]['listedId'], userId:  list[i]['userId'], username: username, condition: list[i]['condition'], additional: list[i]['additional'], payment: list[i]['price']})
              this.setState({ users: listBooks})
            })
        }  
      })
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      token: "",
      page: "",
      textbook: {},
      users: [],
    };
  }

  handleContact = (input) => (e) => {
    e.preventDefault(); 
    // Insert Backend to link logged in user with user clicked. 
    // Make a call to create a message board with the logged in user with the user clicked.
    // User information is below.
    const data = {'listedId': this.state.users[input]['listedId'],'userTwoId': this.state.users[input]['userId'],'ISBN': this.state.textbook.ISBN[1]['identifier']}
    const API = new api();
    console.log(data)
    API.contactUser(data).then( newBalance => {
      this.setState({ currentBalance:  newBalance });
    })
  };

  target(){
    if(this.state.page.toLowerCase() === "buy"){
      return "Sellers:"
    }
    else if(this.state.page.toLowerCase() === "sell"){
      return "Buyers:"
    }
    else if(this.state.page.toLowerCase() === "trade"){
      return "Traders:"
    }
    else if(this.state.page.toLowerCase() === "swap"){
      return "Swapers:"
    }
  }

  payment(){
    if(this.state.page.toLowerCase() === "buy"){
      return "Price:"
    }
    else if(this.state.page.toLowerCase() === "sell"){
      return "Price:"
    }
    else if(this.state.page.toLowerCase() === "trade"){
      return "For:"
    }
    else if(this.state.page.toLowerCase() === "swap"){
      return "For:"
    }
  }

  render() {
    return (
      <Container fluid>
        <Row className="px-5 py-3">
          <Col sm="6" md="4" lg="3">
            <Card className="text-center">
              <Card.Img className="textbook-img" src={this.state.textbook.image} />
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Card.Title>
                    {this.state.textbook.title}
                  </Card.Title>
                  <Card.Text>
                    {this.state.textbook.author}
                  </Card.Text>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col sm="6" md="8" lg="9">
            <Card className="text-center">
              {this.state.textbook.description}
            </Card>      
          </Col>
        </Row>
        <Row className="px-4 py-3 textbooks-table">
          <Col xs="12">
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>
                    {this.target()}
                  </th>
                  <th>
                    Condition:
                  </th>
                  <th>
                    Additional Information:
                  </th>
                  <th>
                    {this.payment()}
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((list, index) => (
                  <tr key={index}>
                    <td>
                      {list.username}
                    </td>
                    <td>
                      {list.condition}
                    </td>
                    <td>
                      {list.additional}
                    </td>
                    <td>
                      {list.payment}
                    </td>
                    <td className="text-center">
                      <Button data-testid="contact" variant="danger" onClick={this.handleContact(index)}>
                        Contact
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}