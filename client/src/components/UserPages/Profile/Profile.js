import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../../Sidebar/Sidebar';

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
            This is the Profile Page
            <div id="Profile">
              <div id="ProfileImage">
                <img
                  alt=""
                  src={require ('../../../public/BlankProfileImage.png')}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </div>
              <div id="ProfileInfo">
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
