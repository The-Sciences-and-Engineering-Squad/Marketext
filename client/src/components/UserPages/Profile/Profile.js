import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

import blankProfileImage from '../../../public/blank-profile.png';
import './Profile.css';

export default class Profile extends React.Component {
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
                  <Image id="profileImg" src={blankProfileImage} roundedCircle />                </Col>
              </Row>
              <Row className="justify-content-center mt-2">
                <Col xs="auto">
                  <h4 id="userName">Username</h4>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                  <Form>
                    <h3 id="profileDescription"> User Credentials </h3>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control id="profile-forms" type="email" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formOldPassword">
                        <Form.Label>Old Password:</Form.Label>
                        <Form.Control id="profile-forms" type="password" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formNewPassword">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control id="profile-forms" type="password" />
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formConfirmPassword">
                        <Form.Label>Confirm New Password:</Form.Label>
                        <Form.Control id="profile-forms" type="password" />
                      </Form.Group>
                    </Form.Row>
                    <hr/>
                    <h3 id="profileDescription"> Shipping Information </h3>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control id="profile-forms" type="text" />
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="6" controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control id="profile-forms" type="text" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formPhoneNumber">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control id="profile-forms" type="text" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="6" controlId="formAddress">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control id="profile-forms" type="text" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} sm="12" md="4" controlId="formCity">
                        <Form.Label>City:</Form.Label>
                        <Form.Control id="profile-forms" type="text" />
                      </Form.Group>
                      <Form.Group as={Col} sm="12" md="4" controlId="formState">
                        <Form.Label>State:</Form.Label>
                        <Form.Control id="profile-forms" as="select" defaultValue="">
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
                        <Form.Control id="profile-forms" type="text" />
                      </Form.Group>
                    </Form.Row>
                    <Button id="saveChangesBtn">Save Changes</Button>
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
