import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import sampletextbook from '../../../public/sampletextbook.jpg'
import './Buy.css'

export default class Buy extends React.Component {
  render() {
    var textbooks = [
      {title: "Insert Book Title 1", author: "Insert Author 1"},
      {title: "Insert Book Title 2", author: "Insert Author 2"},
      {title: "Insert Book Title 3", author: "Insert Author 3"},
      {title: "Insert Book Title 4", author: "Insert Author 4"},
      {title: "Insert Book Title 5", author: "Insert Author 5"},
      {title: "Insert Book Title 6", author: "Insert Author 6"},
      {title: "Insert Book Title 7", author: "Insert Author 7"},
      {title: "Insert Book Title 8", author: "Insert Author 8"},
      {title: "Insert Book Title 9", author: "Insert Author 9"},
    ];

    return (
      <Container fluid>
        <Row className="row-resize">
          {textbooks.map((list, index) => (
            <Col key={index} sm="6" md="4" lg="3" className="my-3">
              <Card className="text-center">
                <Card.Header>
                  Click For Seller
                </Card.Header>
                <Card.Img src={sampletextbook} />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{list.title}</ListGroupItem>
                  <ListGroupItem>{list.author}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          ))
          }
        </Row>
      </Container>
    );
  }
}