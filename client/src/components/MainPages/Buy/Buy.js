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
  componentDidMount() {
    // Insert Backend Call For Textbooks When Nothing is on Search
    this.setState({
      textbooks: [
        {title: "Insert Book Title 1", author: "Insert Author 1", image: sampletextbook},
        {title: "Insert Book Title 2", author: "Insert Author 2", image: sampletextbook},
        {title: "Insert Book Title 3", author: "Insert Author 3", image: sampletextbook},
        {title: "Insert Book Title 4", author: "Insert Author 4", image: sampletextbook},
        {title: "Insert Book Title 5", author: "Insert Author 5", image: sampletextbook},
        {title: "Insert Book Title 6", author: "Insert Author 6", image: sampletextbook},
        {title: "Insert Book Title 7", author: "Insert Author 7", image: sampletextbook},
        {title: "Insert Book Title 8", author: "Insert Author 8", image: sampletextbook},
        {title: "Insert Book Title 9", author: "Insert Author 9", image: sampletextbook},
      ]
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchTextbooks: [
        {title: "Search Book Title 1", author: "Search Author 1", image: sampletextbook},
        {title: "Search Book Title 2", author: "Search Author 2", image: sampletextbook},
        {title: "Search Book Title 3", author: "Search Author 3", image: sampletextbook},
        {title: "Search Book Title 4", author: "Search Author 4", image: sampletextbook},
        {title: "Search Book Title 5", author: "Search Author 5", image: sampletextbook},
        {title: "Search Book Title 6", author: "Search Author 6", image: sampletextbook},
        {title: "Search Book Title 7", author: "Search Author 7", image: sampletextbook},
        {title: "Search Book Title 8", author: "Search Author 8", image: sampletextbook},
        {title: "Search Book Title 9", author: "Search Author 9", image: sampletextbook},
      ],
      textbooks: [],
    };
  }

  selectedTextbook = index => (e) => {
    e.preventDefault(); 
    // Add Backend For When Textbook Is Clicked
    console.log("clicked " + index);
  }

  render() {
    return (
      <Container fluid>
        <Row className="row-resize">
          { this.state.search === "" ? 
            this.state.textbooks.map((list, index) => (
              <Col key={index} sm="6" md="4" lg="3" className="book-selection" onClick={this.selectedTextbook(index)}>
                <Card className="text-center books">
                  <Card.Header>
                    <strong>
                      Click For Sellers
                    </strong>
                  </Card.Header>
                  <Card.Img src={list.image} />
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
          :
          this.state.searchTextbooks.map((list, index) => (
            <Col key={index} sm="6" md="4" lg="3" className="book-selection" onClick={this.selectedTextbook(index)}>
              <Card className="text-center books">
                <Card.Header>
                  <strong>
                    Click For Sellers
                  </strong>
                </Card.Header>
                <Card.Img src={list.image} />
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
      </Container>
    );
  }
}