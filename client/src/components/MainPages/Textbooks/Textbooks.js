import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

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
    // Insert Backend of list of buyers/sellers/traders/swappers based on page.
    const path = window.location.pathname.split('/')
    const page = path[1];
    console.log(page);
    this.setState({ 
      users: [
        {username: "Kevin", condition: "worn", additional: "Used Only Once", price: "$100"},
        {username: "Andy", condition: "worn", additional: "Used Only Once", price: "$100"},
      ]
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      textbook: {},
      users: [],
    };
  }

  render() {
    return (
      <Row className="row-resize">
        <Col>
          {this.state.textbook.title}
        </Col>
      </Row>
    );
  }
}