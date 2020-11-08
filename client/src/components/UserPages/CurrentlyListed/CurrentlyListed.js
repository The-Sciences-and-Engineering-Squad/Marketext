import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Sidebar from '../../Sidebar/Sidebar';
import './CurrentlyListed.css'

export default class CurrentlyListed extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    this.setState({ username: cookies.get('username') });
    // Insert Backend to get currently listed for user.
    this.setState({ 
      textbooks: [
        {title: "Java", category: "Sell", price: "$100"},
        {title: "Math", category: "Buy", price: "$120"},
        {title: "English", category: "Trade", price: "$10 + Math"},
        {title: "Engineering", category: "Swap", price: "$10 + English"},
      ]
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      textbooks: []
    };
  }

  handleRemove = (input) => (e) => {
    e.preventDefault();
    // Insert Backend to remove the listing from the user.
    console.log(this.state.textbooks[input]);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">      
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10">
            <Container fluid>
              <Row className="mt-4 justify-content-center">
                <Col xs="auto">
                  <h3>Your Currently Listed Textbooks</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 currentlisted-table">
                <Col xs="12">
                  <Table bordered hover responsive>
                    <thead>
                      <tr>
                        <th>
                          Textbook:
                        </th>
                        <th>
                          Category:
                        </th>
                        <th>
                          Price:
                        </th>
                        <th>
                          Remove:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.textbooks.map((list, index) => (
                        <tr key={index}>
                          <td>
                            {list.title}
                          </td>
                          <td>
                            {list.category}
                          </td>
                          <td>
                            {list.price}
                          </td>
                          <td className="text-center">
                            <Button variant="danger" onClick={this.handleRemove(index)}>
                              X
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button as={Link} to="/CurrentlyListed/AddNew" block variant="danger">Add New</Button>
                </Col>
              </Row>
            </Container>
          </Col> 
        </Row>
      </Container>
    );
  }
}