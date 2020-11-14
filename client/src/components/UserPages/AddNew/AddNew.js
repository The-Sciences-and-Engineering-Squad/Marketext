import React from 'react';
import Cookies from 'universal-cookie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import api from '../../API/api'
import './AddNew.css'

export default class AddNew extends React.Component {

  componentDidMount(){
    const cookies = new Cookies();
    this.setState({ token:  cookies.get('token') });
  }

  constructor(props) {
    super(props);
    this.state = {
      token: "",
      ISBN: "",
      condition: "",
      category: "",
      price: "",
      additionalInformation: "",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleBack = (e) => {
    e.preventDefault();
    this.props.history.push('/CurrentlyListed');
  }

  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { ISBN, condition, category, price, additionalInformation } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (ISBN.length < 13){
      newState.errors.push("Please Input the ISBN-13. 13 Characters for the ISBN.");
    }
    if (condition === ""){
      newState.errors.push("Please Input the Textbook Condition.");
    }
    if (category === ""){
      newState.errors.push("Please Select a Category. See FAQ for Help.");
    }
    if (price === ""){
      newState.errors.push("Please Enter the Price for the Textbook. See FAQ for Help.");
    }
    if (newState.errors.length === 0){
      // Add textbook to database for listing, also make it show up on currently listed for the user.
      const data = this.state
      const API = new api();
      API.addTextBooks(data).then( error => {
        this.setState(({errors}) => ({
          errors: errors.concat(error)
        }));
      })
    }
    this.setState(newState);
  };
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="2">      
            <Sidebar />
          </Col>
          <Col xs="8" sm="9" md="10">
            <Container fluid>
              <Row className="mt-4">
                <Col xs="12" sm="4">
                  <Button variant="danger" onClick={this.handleBack}>Back</Button>
                </Col>
                <Col xs="12" sm="8">
                  <h3>Add a Textbook To Your Listing</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-2">
                <Col>
                  <span className="text-red">* Required Fields</span>
                  { this.state.errors.length > 0 ?
                    this.state.errors.map((error,index) => {
                      return <li key={index} className="text-warning"> {error} </li>
                  })
                  :
                  <div></div>
                  }
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} xs="12" md="6" controlId="formISBN">
                        <Form.Label>ISBN-13: <span className="text-red">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter ISBN" maxLength="13" value={this.state.ISBN} onChange={this.handleChange("ISBN")}/>
                      </Form.Group>
                      <Form.Group as={Col} xs="12" md="6" controlId="formCondition">
                        <Form.Label>Condition: <span className="text-red">*</span></Form.Label>
                        <Form.Control type="text" maxLength="10" placeholder="Enter Condition" value={this.state.condition} onChange={this.handleChange("condition")}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} xs="12" md="6" controlId="formCategory">
                        <Form.Label>Category: <span className="text-red">*</span></Form.Label>
                        <Form.Control as="select" value={this.state.category} onChange={this.handleChange("category")}>
                          <option value="">Choose</option>
                          <option value="Buy">Buy</option>
                          <option value="Sell">Sell</option>
                          <option value="Trade">Trade</option>
                          <option value="Swap">Swap</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col} xs="12" md="6" controlId="formPrice">
                        <Form.Label>Price: <span className="text-red">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" value={this.state.price} onChange={this.handleChange("price")}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} xs="12" controlId="formInformation">
                        <Form.Label>Additional Information:</Form.Label>
                        <Form.Control as="textarea" rows={3} value={this.state.additionalInformation} onChange={this.handleChange("additionalInformation")}/>
                      </Form.Group>
                    </Form.Row>
                    <Button className="float-right" variant="danger" type="submit" onClick={this.handleSubmit}>Add To Listings</Button>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          FAQ
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <h5>
                            What does each category stand for?
                          </h5>
                          <p>
                            Each category is where the posting will be found at. <br/>
                            If you would like to sell your textbook, set the category to buy, since you are targeting buyers. <br/>
                            If you would like to buy a textbook, set the category to sell, since you are targeting sellers. <br/>
                            If you would like to trade your textbook, set the category to trade. <br/>
                            If you would like to swap your textbook, set the category to swap.
                          </p>
                          <hr/>
                          <h5>
                            What is price?
                          </h5>
                          <p>
                            Price is the desired transaction for the textbook. <br/>
                            For sellers, it's how much you want for your textbook. <br/>
                            For buyers, it's how much you're willing to pay for that textbook. <br/>
                            For trade, it's what you're willing to trade for your textbook. Something more specific and equal of value. <br/>
                            For swap, it's what you're willing to swap for your textbook. Could be less specific and less or more of value. 
                          </p>
                          <hr/>
                          <h5>
                            Do I have to fill in everything in the forms?
                          </h5>
                          <p>
                            No, you do not. You just have to fill in the required fields.<br/>
                            Make sure you input the correct ISBN-13. The ISBN should have 13 characters.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
              </Row>
            </Container>
          </Col> 
        </Row>
      </Container>
    );
  }
}