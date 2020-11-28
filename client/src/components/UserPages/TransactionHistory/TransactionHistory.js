import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Cookies from 'universal-cookie';
import Table from 'react-bootstrap/Table';

import './TransactionHistory.css'

export default class TransactionHistory extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get('token');
    console.log(token);
    // Insert Backend to get transaction history for user.
    this.setState({
      textbooks: [
        {transactionNo:"1", title: "C++", category: "Sell", price: "$75"},
        {transactionNo:"2", title: "Python", category: "Buy", price: "$50"},
        {transactionNo:"3", title: "Computer Organization", category: "Trade", price: "$250 + Assembly"},
        {transactionNo:"4", title: "Electrical Engineering", category: "Swap", price: "$25 + Computer Organization"},
      ]
    })
  }

  constructor() {
    super();
    this.state = {
      textbooks: []
    };
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <div className="sidebar-user-transactions-container">
            <Sidebar className="sidebar-container-page"/>
            <Container fluid className="p-2 m-3">
              <Row className="mt-4 justify-content-center">
                <Col xs="auto">
                  <h3 data-testid="text">Your Transaction History</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 transaction-table">
                <Col xs="12">
                  <Table bordered hover responsive>
                    <thead>
                      <tr>
                        <th>
                          Transaction No.
                        </th>
                        <th>
                          Textbook:
                        </th>
                        <th>
                          Category:
                        </th>
                        <th>
                          Price:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.textbooks.map((list, index) => (
                        <tr key={index}>
                          <td>
                            {list.transactionNo}
                          </td>
                          <td>
                            {list.title}
                          </td>
                          <td>
                            {list.category}
                          </td>
                          <td>
                            {list.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    );
  }
}
