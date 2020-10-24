import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

import blankProfileImage from '../../../public/BlankProfileImage.png';
import './Profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "userName",
      email: "user@email.com",
      oldPassword: "oldPassword",
      newPassword: "newPassword",
      newPassword2: "newPassword",
      firstName: "FirstName",
      lastName: "LastName",
      phoneNumber: "(123) 456-7890",
      address: "123 Main Street",
      city: "City",
      state: "NY",
      zipcode: "12345",
      errors: [],
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // eventually api call to call the backend
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, oldPassword, newPassword, newPassword2, firstName, lastName, phoneNumber, address, city, state, zipcode } = this.state;
    var newState = Object.assign({}, this.state);
    newState.errors = [];
    if (oldPassword === "") {
      newState.errors.push("Please enter old password");
    }
    if (newPassword === "" || newPassword2 === "") {
      newState.errors.push("Please enter new password");
    }
    if (newPassword !== newPassword2) {
      newState.errors.push("New password fields do not match");
    }
    if (newState.errors.length === 0) {
      // Insert Backend Here.
    }
    this.setState(newState);
    alert("Hello! I am an alert box!!");
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
              <Row className="justify-content-center mt-4">
                <Col xs="auto">
                  <Image className="profileImg" src={blankProfileImage} roundedCircle />                </Col>
              </Row>
              <Row className="justify-content-center mt-2">
                <Col xs="auto">
                  <h4 className="userName">{this.state.username}</h4>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                  <Form onSubmit={this.handleSubmit}>
                    { this.state.errors.length > 0 ?
                      this.state.errors.map((error,index) => {
                        return <li key={index} className="text-warning"> {error} </li>
                    })
                    :
                    <div></div>
                    }
                    <h3 className="profileDescription"> User Credentials </h3>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control className="profile-forms" type="email" placeholder={this.state.email} onChange={this.handleChange("email")}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formOldPassword">
                        <Form.Label>Old Password:</Form.Label>
                        <Form.Control className="profile-forms" type="password" onChange={this.handleChange("oldPassword")}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formNewPassword">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control className="profile-forms" type="password" onChange={this.handleChange("newPassword")}/>
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formConfirmPassword">
                        <Form.Label>Confirm New Password:</Form.Label>
                        <Form.Control className="profile-forms" type="password" onChange={this.handleChange("newPassword2")}/>
                      </Form.Group>
                    </Form.Row>
                    <hr/>
                    <h3 className="profileDescription"> Shipping Information </h3>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control className="profile-forms" type="text" placeholder={this.state.firstName} onChange={this.handleChange("firstName")}/>
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control className="profile-forms" type="text" placeholder={this.state.lastName} onChange={this.handleChange("lastName")}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formPhoneNumber">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control className="profile-forms" type="text" placeholder={this.state.phoneNumber} onChange={this.handleChange("phoneNumber")}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formAddress">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control className="profile-forms" type="text" placeholder={this.state.address} onChange={this.handleChange("address")}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="4" controlId="formCity">
                        <Form.Label>City:</Form.Label>
                        <Form.Control className="profile-forms" type="text" placeholder={this.state.city} onChange={this.handleChange("city")}/>
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="4" controlId="formState">
                        <Form.Label>State:</Form.Label>
                        <Form.Control className="profile-forms" as="select" defaultValue={this.state.state} onChange={this.handleChange("state")}>
                          <option value="">Choose</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group  as={Col} sm="12" md="4" controlId="formZip">
                        <Form.Label>Zip Code:</Form.Label>
                        <Form.Control className="profile-forms" type="text" placeholder={this.state.zipcode} onChange={this.handleChange("zipcode")}/>
                      </Form.Group>
                    </Form.Row>
                    <Button variant="danger" className="saveChangesBtn" onClick={this.handleSubmit}>Save Changes</Button>
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
