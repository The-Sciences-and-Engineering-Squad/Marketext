import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';
import blankProfileImage from '../../../public/blank-profile.png';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

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
            <div id="Profile">
              <div id="ProfileImage">
                <img id="profileImg"
                  alt=""
                  src={blankProfileImage}
                />
                <h4 id="userName">USERNAME</h4>
              </div>
              <hr/>
              <div id="UserCredentials">
              <h3> User Credentials </h3>
                <div class="form-group" id="emailBox">
                  <label id="emailLabel" for="email">Email:</label>
                  <input id="emailInput" type="text" class="form-control" id="email" placeholder=""/>
                </div>
                <div class="form-group" id="oldPWBox">
                  <label id="oldPWLabel" for="oldPW">Old Password:</label>
                  <input id="oldPWInput" type="text" class="form-control" id="oldPW" placeholder=""/>
                </div>
                <div class="two-box-container" id="newPasswordBox">
                  <div class="form-group" class="two-box-left" id="newPW1Box">
                    <label id="newPW1Label" for="newPW1">New Password:</label>
                    <input id="newPW1Input" type="text" class="form-control" id="newPW1" placeholder=""/>
                  </div>
                  <div class="form-group" class="two-box-right" id="newPW2Box">
                    <label id="newPW2Label" for="newPW2">Confirm New Password:</label>
                    <input id="newPW2Input" type="text" class="form-control" id="newPW2" placeholder=""/>
                  </div>
                </div>
              </div>
              <hr/>
              <div id="ProfileInfo">
              <h3> Shipping Information </h3>
                <div class="two-box-container" id="fullNameBox">
                  <div class="form-group" class="two-box-left" id="firstNameBox">
                    <label id="firstNameLabel" for="firstName">First Name:</label>
                    <input id="firstNameInput" type="text" class="form-control" id="firstName" placeholder=""/>
                  </div>
                  <div class="form-group" class="two-box-right" id="lastNameBox">
                    <label id="lastNameLabel" for="lastName">Last Name:</label>
                    <input id="lastNameInput" type="text" class="form-control" id="lastName" placeholder=""/>
                  </div>
                </div>
                <div class="form-group" id="phoneNumberBox">
                  <label id="phoneNumberLabel" for="phoneNumber">Phone Number:</label>
                  <input id="phoneNumberInput" type="text" class="form-control" id="phoneNumber" placeholder=""/>
                </div>
                <div class="form-group" id="streetBox">
                  <label id="streetLabel" for="street">Street:</label>
                  <input id="streetInput" type="text" class="form-control" id="street" placeholder=""/>
                </div>
                <div class="three-box-container" id="location">
                  <div class="form-group" class="three-box-left" id="cityBox">
                    <label id="cityLabel" for="city">City:</label>
                    <input id="cityInput" type="text" class="form-control" id="city" placeholder=""/>
                  </div>
                  <div class="form-group" class="three-box-middle" id="stateBox">
                    <label id="stateLabel" for="state">State:</label>
                    <select class="custom-select form-control" id="state">
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
                    </select>
                  </div>
                  <div class="form-group" class="three-box-right" id="zipcodeBox">
                    <label id="zipcodeLabel" for="zipcode">Zip Code:</label>
                    <input id="zipcodeInput" type="text" class="form-control" id="zipcode" placeholder=""/>
                  </div>
                </div>
              </div>
              <Button id="saveChangesBtn">Save Changes</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
