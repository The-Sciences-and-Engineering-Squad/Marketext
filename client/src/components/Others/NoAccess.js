import React from 'react';
import {Redirect} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class NoAccess extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render(){
    return (
      this.state.redirect ?
      <Redirect to="/" />
      :
      <Container fluid>
        <Row className="m-4 justify-content-center">
          <Col xs="auto">
            <h1>
              You Do Not Have Access To This Page.
              <br />
              You Will Be Redirected Soon.
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
}