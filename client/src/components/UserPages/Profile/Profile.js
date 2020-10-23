import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import blankProfileImage from '../../../public/blank-profile.png';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

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
            <Col id="ProfileImage" xs={6} md={4}>
              <Image id="profileImg" src={blankProfileImage} roundedCircle />
              <h4 id="userName">USERNAME</h4>
            </Col>
            <hr/>
            <Form>
              <h3> User Credentials </h3>
              <Form.Group id="emailBox">
                <Form.Label id="emailLabel">Email:</Form.Label>
                <Form.Control id="emailInput" type="email" placeholder=""/>
              </Form.Group>
              <Form.Group id="oldPWBox">
                <Form.Label id="oldPWLabel">Old Password:</Form.Label>
                <Form.Control id="oldPWLabel" type="password" placeholder=""/>
              </Form.Group>

              <Form.Group id="newPasswordBox">
                <Form.Group id="newPW1Box">
                  <Form.Label id="newPW1Label">New Password:</Form.Label>
                  <Form.Control id="newPW1Input" type="password" placeholder=""/>
                </Form.Group>
                <Form.Group id="newPW2Box">
                  <Form.Label id="newPW2Label">Confirm New Password:</Form.Label>
                  <Form.Control id="newPW2Input" type="password" placeholder=""/>
                </Form.Group>
              </Form.Group>
              <hr/>
              <h3> Shipping Information </h3>
              <Form.Group id="fullNameBox">
                <Form.Group id="firstNameBox">
                  <Form.Label id="firstNameLabel">First Name:</Form.Label>
                  <Form.Control id="firstNameInput" type="text" placeholder=""/>
                </Form.Group>
                <Form.Group id="lastNameBox">
                  <Form.Label id="lastNameLabel">Last Name:</Form.Label>
                  <Form.Control id="lastNameInput" type="text" placeholder=""/>
                </Form.Group>
              </Form.Group>
              <Form.Group id="phoneNumberBox">
                <Form.Label id="phoneNumberLabel">Phone Number:</Form.Label>
                <Form.Control id="phoneNumberInput" type="text" placeholder=""/>
              </Form.Group>
              <Form.Group id="streetBox">
                <Form.Label id="streetLabel">Street Address:</Form.Label>
                <Form.Control id="streetInput" type="text" placeholder=""/>
              </Form.Group>
              <Form.Group id="location">
                <Form.Group id="cityBox">
                  <Form.Label id="cityLabel">City:</Form.Label>
                  <Form.Control id="streetInput" type="text" placeholder=""/>
                </Form.Group>
                <Form.Group id="stateBox">
                  <Form.Label id="stateLabel">State:</Form.Label>
                  <Form.Control as="select" id="stateInput">
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
                <Form.Group id="zipcodeBox">
                  <Form.Label id="zipcodeLabel">Zip Code:</Form.Label>
                  <Form.Control id="zipcodeInput" type="text" placeholder=""/>
                </Form.Group>
              </Form.Group>
              <Button id="saveChangesBtn">Save Changes</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
