import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Home.css'
import textbook from '../../../public/textbook.png';

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-home text-white">
          <Col md="auto" className="d-none d-md-block">
            <Image src={textbook} fluid />
          </Col>
          <Col md="auto" className="text-center">
            <h2>Welcome to Marketext</h2>
            <p>Ready to sell, buy, trade, or swap your textbooks?</p>
            <p>Join Marketext a platform to negotiate with others!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}