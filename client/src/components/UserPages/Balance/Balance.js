import React from 'react';
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import api from '../../API/api'
import './Balance.css'

export default class Balance extends React.Component {
  componentDidMount(){
    // Replace this information with information retrieved from the backend about the user balance.
    const cookies = new Cookies();
    this.setState({token: cookies.get('token')})
    const API = new api();
    API.getBalance({token: cookies.get('token')}).then( balance => {
      this.setState({ currentBalance: balance });
    })
  }

  constructor() {
    super();
    this.state = {
      token: "",
      currentBalance: "",
      addBalance: "",
      subtractBalance: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // eventually api call to call the backend
  handleAdd = (e) => {
    e.preventDefault();
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (this.state.addBalance < 0){
      newState.errors.push("$" + this.state.addBalance + " Is A Negative Balance. Please Enter A Correct Amount To Add!");
    }
    else{
      // Insert backend to add value to user's balance.
      const data = this.state
      const API = new api();
      API.addBalance(data).then( newBalance => {
        this.setState({ currentBalance:  newBalance });
      })
    }
    this.setState(newState);
  }

  // eventually api call to call the backend
  handleSubtract = (e) => {
    e.preventDefault();
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (this.state.subtractBalance < 0){
      newState.errors.push("$" + this.state.subtractBalance + " Is A Negative Deposit. Please Enter A Correct Amount To Deposit!");
    }
    else if(this.state.currentBalance - this.state.subtractBalance < 0){
      newState.errors.push("You Will have $" + this.state.currentBalance - this.state.subtractBalance + " After This Deposit, Which Is Not Possible. Please Enter An Appropriate Amount To Deposit!");
    }
    else{
      // Insert backend to subtract value from user's balance.
      const data = this.state;
      const API = new api();
      API.subBalance(data).then( newBalance => {
        this.setState({ currentBalance: newBalance });
      })
    }
    this.setState(newState);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="sidebar-balance-container">
            <Sidebar className="sidebar-container-page"/>
            <Container fluid className="balance-container">
              <Row className="mt-4 justify-content-center">
                <Col xs="auto">
                  <h3 data-testid="text" className="current-balance-header">Current Balance: ${this.state.currentBalance}</h3>
                </Col>
              </Row>
              <hr />
              <ul data-testid="errors">
                { this.state.errors.length > 0 &&
                  this.state.errors.map((error,index) => {
                    return <li key={index} className="text-warning"> {error} </li>
                })
                }
              </ul>
              <Row className="py-4">
                <Col sm="12" md="6">
                  <Form onSubmit={this.handleAdd}>
                    <label>Add to Balance:</label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl data-testid="addValue" type="number" min="0.00" step="0.01" placeholder="Amount" value={this.state.addBalance} onChange={this.handleChange("addBalance")}/>
                      <InputGroup.Append>
                        <Button data-testid="add" variant="danger" type="submit" onClick={this.handleAdd}>Add</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form>
                </Col>
              </Row>
              <Row className="py-4">
                <Col sm="12" md="6">
                  <Form onSubmit={this.handleSubtract}>
                    <label>Deposit to Account:</label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl data-testid="subtractValue" type="number" min="0.00" step="0.01" placeholder="Amount" value={this.state.subtractBalance} onChange={this.handleChange("subtractBalance")}/>
                      <InputGroup.Append>
                        <Button data-testid="subtract" variant="danger" type="submit" onClick={this.handleSubtract}>Deposit</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    );
  }
}
