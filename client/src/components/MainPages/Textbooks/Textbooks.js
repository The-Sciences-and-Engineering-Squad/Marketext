import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import './Textbooks.css'

export default class Textbooks extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(response => response.json())
    .then(result => {
      if(result.items !== null){
        let hasISBN = result.volumeInfo.industryIdentifiers;
        this.setState({ textbook: {
          title: result.volumeInfo.title,
          author: result.volumeInfo.authors, 
          image: result.volumeInfo.imageLinks.thumbnail,
          description: result.volumeInfo.description,
          ISBN: hasISBN !== undefined ? result.volumeInfo.industryIdentifiers:null, 
        }
        })
      }
    })
    const path = window.location.pathname.split('/')
    const page = path[1];
    this.setState({ page: page });

    // Insert Backend of list of buyers/sellers/traders/swappers based on page.
    // Use the const page to know what page you're on.

    this.setState({ 
      users: [
        {username: "Kevin", condition: "worn", additional: "Used Only Once", payment: "$100"},
        {username: "Andy", condition: "worn", additional: "Used Only Once", payment: "$100"},
      ]
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      page: "",
      textbook: {},
      users: [],
    };
  }

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
        <Row className="px-4 py-3">
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
                      <Button variant="danger">
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