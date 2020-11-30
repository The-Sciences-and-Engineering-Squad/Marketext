import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Cookies from 'universal-cookie';
import Table from 'react-bootstrap/Table';
import api from '../../API/api'
import './TransactionHistory.css'

export default class TransactionHistory extends React.Component {
  componentDidMount() {
    const cookies = new Cookies();
    var token = cookies.get('token');
    console.log(token);
    // Insert Backend to get transaction history for user.

    const API = new api();
    API.getTransaction({token: cookies.get('token')}).then(list => {
      let transactionList = []
      for(let i = 0;i < list.length;i++){
            API.getBookDetails(list[i]['ISBN']).then(book => {
              transactionList.push(

                {transactionNo:list[i]['transactionId'], title: book['title'], category: list[i]['category'], price: list[i]['price']},
            )
            this.setState({ textbooks: transactionList})
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


  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">      
            <Sidebar/>
          </Col>
          <Col xs="8" sm="9" md="10">
            <Container fluid>
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
          </Col> 
        </Row>
      </Container>
    );
  }
}