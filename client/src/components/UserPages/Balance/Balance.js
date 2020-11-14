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
    if(cookies.get('token')){
      this.setState({token: cookies.get('token')})
      const API = new api();
      API.getBalance({token: cookies.get('token')}).then( balance => {
        this.setState({ currentBalance: balance });
      })   
    }
  }

  constructor(props) {
    super(props);
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
    else{
      // Insert backend to subtract value from user's balance.
      const data = this.state
      const API = new api();
      API.subBalance(data).then( newBalance => {
        this.setState({ currentBalance:  newBalance });
      })
    }
    this.setState(newState);
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
                  <h3>Current Balance: ${this.state.currentBalance}</h3>
                </Col>
              </Row>
              <hr />
              { this.state.errors.length > 0 ?
                this.state.errors.map((error,index) => {
                  return <li key={index} className="text-warning"> {error} </li>
              })
              :
              <div></div>
              }
              <Row className="py-4">
                <Col sm="12" md="6">
                  <Form onSubmit={this.handleAdd}>
                    <label>Add to Balance:</label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl type="number" min="0.00" step="0.01" placeholder="Amount" value={this.state.addBalance} onChange={this.handleChange("addBalance")}/>
                      <InputGroup.Append>
                        <Button variant="danger" type="submit" onClick={this.handleAdd}>Add</Button>
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
                      <FormControl type="number" min="0.00" step="0.01" placeholder="Amount" value={this.state.subtractBalance} onChange={this.handleChange("subtractBalance")}/>
                      <InputGroup.Append>
                        <Button variant="danger" type="submit" onClick={this.handleSubtract}>Deposit</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col> 
        </Row>
      </Container>
    );
  }
}
