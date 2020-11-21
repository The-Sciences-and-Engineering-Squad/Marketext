import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import './RenderTextbooks.css'

class RenderTextbooks extends React.Component {
  selectedTextbook = index => (e) => {
    e.preventDefault(); 
    // Add Backend For When Textbook Is Clicked
    this.props.history.push(`/${this.props.page}/${this.props.textbooks[index].id}`);
  }

  render() {
    return (
      <Row className="row-resize">
        { 
          this.props.textbooks.map((list, index) => (
            <Col data-testid="book" key={index} sm="6" md="4" lg="3" className="book-selection" onClick={this.selectedTextbook(index)}>
              <Card className="text-center books">
                <Card.Header>
                  <strong>
                    Click For {this.props.target}
                  </strong>
                </Card.Header>
                <Card.Img className="renderbook-img" src={list.image} />
                <ListGroup variant="flush">
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

export default withRouter(RenderTextbooks);