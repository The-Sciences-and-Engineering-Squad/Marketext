import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import './RenderTextbooks.css'

export default class RenderTextbooks extends React.Component {
  selectedTextbook = index => (e) => {
    e.preventDefault(); 
    // Add Backend For When Textbook Is Clicked

    // This is the whole book object you will need all of this 
    console.log(this.props.textbooks[index])

  }

  render() {
    return (
      <Row className="row-resize">
        { 
          this.props.textbooks.map((list, index) => (
            <Col key={index} sm="6" md="4" lg="3" className="book-selection" onClick={this.selectedTextbook(index)}>
              <Card className="text-center books">
                <Card.Header>
                  <strong>
                    Click For {this.props.target}
                  </strong>
                </Card.Header>
                <Card.Img className="cardImage" src={list.image} />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Card.Title>
                      {list.title}
                    </Card.Title>
                    <Card.Text>
                      {list.author}
                    </Card.Text>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          ))
        }
      </Row>
    );
  }
}