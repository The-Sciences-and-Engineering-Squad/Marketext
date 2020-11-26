import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import api from '../../API/api'
import Sidebar from '../../Sidebar/Sidebar';
import './CurrentlyListed.css'

export default class CurrentlyListed extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    let tokens = {token: cookies.get('token')};
    // Insert Backend to get currently listed for user.
    const API = new api();
    let listBooks = []
    API.getUserList(tokens).then( books => {
      for(let i = 0; i < books.length; i++){
          API.getBookDetails(books[i]['ISBN']).then(booksInfo => {
            listBooks.push({title: booksInfo['title'], category: books[i]['category'],price: books[i]['price']})
            this.setState({
              textbooks: listBooks
            })
          })
      }
    })

  }

  constructor() {
    super();
    this.state = {
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
          <div className="sidebar-useroption-container">
            <Sidebar className="sidebar-container-page"/>
            <Container fluid className="p-2 m-3">
              <Row className="mt-4 justify-content-center">
                <Col xs="auto">
                  <h3 data-testid="text">Your Currently Listed Textbooks</h3>
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
                            <Button data-testid="remove" variant="danger" onClick={this.handleRemove(index)}>
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
          </div>
        </Row>
      </Container>
    );
  }
}
