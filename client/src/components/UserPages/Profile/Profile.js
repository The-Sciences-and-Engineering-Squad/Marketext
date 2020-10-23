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
              <div id="ProfileInfo">
                <div class="form-group" id="emailBox">
                  <label id="emailLabel" for="email">Email:</label>
                  <input id="emailInput" type="text" class="form-control" id="email" placeholder=""/>
                </div>
                <div class="form-group" id="oldPWBox">
                  <label id="oldPWLabel" for="oldPW">Old Password:</label>
                  <input id="oldPWInput" type="text" class="form-control" id="oldPW" placeholder=""/>
                </div>
                <div id="newPasswordBox">
                  <div class="form-group" id="newPW1Box">
                    <label id="newPW1Label" for="newPW1">New Password:</label>
                    <input id="newPW1Input" type="text" class="form-control" id="newPW1" placeholder=""/>
                  </div>
                  <div class="form-group" id="newPW2Box">
                    <label id="newPW2Label" for="newPW2">Confirm New Password:</label>
                    <input id="newPW2Input" type="text" class="form-control" id="newPW2" placeholder=""/>
                  </div>
                </div>
                <Button id="saveChangesBtn">Save Changes</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
