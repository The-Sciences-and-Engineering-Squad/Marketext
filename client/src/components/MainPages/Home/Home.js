import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './Home.css'
import textbook from '../../../public/textbook.png';
import Checklist from '../../../public/Checklist.png';
import Send from '../../../public/Send.png';
import Goods from '../../../public/Goods.png';
import Buy from '../../../public/Buy.png';
import Sell from '../../../public/Sell.png';
import Trade from '../../../public/Trade.png';
import Swap from '../../../public/Swap.png';

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkgreen text-white">
          <Col md="auto" className="d-none d-md-block">
            <Image src={textbook} fluid />
          </Col>
          <Col md="auto" className="text-center">
            <h2>Welcome to Marketext</h2>
            <p>Ready to sell, buy, trade, or swap your textbooks?</p>
            <p>Join Marketext a platform to negotiate with others!</p>
          </Col>
        </Row>
        <Row className="my-4 mx-3 p-4 justify-content-center">
          <Container>
            <Row>
              <h3>
                How It Works:
              </h3>
              <Container className="box">
                <Row className="my-5 justify-content-center">
                  <Col md="3" className="text-center vl">
                    <img
                      alt=""
                      src={Checklist}
                      height="80"
                      className="d-inline-block align-top"
                    />
                    <h1>1. List</h1>
                    <h4>Your Textbook</h4>
                  </Col>
                  <Col md="3" className="text-center vl">
                    <img
                      alt=""
                      src={Send}
                      height="80"
                      className="d-inline-block align-top"
                    />
                    <h1>2. Send</h1>
                    <h4>It Out</h4>
                  </Col>
                  <Col md="3" className="text-center">
                    <img
                      alt=""
                      src={Goods}
                      height="80"
                      className="d-inline-block align-top"
                    />
                    <h1>3. Obtain</h1>
                    <h4>The Goods</h4>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </Row>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkred text-white">
          <Col md="auto" className="d-none d-md-block">
            <Image src={Buy} fluid />
          </Col>
          <Col md="auto" className="text-center">
            <h3>What is Buy?</h3>
            <p>Buy is for people who are looking to buy a certain textbook.</p>
            <p>After typing in what you are looking for, it will show a list of sellers for that textbook.</p>
            <p>Target: Buyers</p>
          </Col>
        </Row>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkblue text-white">
          <Col md="auto" className="d-none d-md-block">
            <Image src={Sell} fluid />
          </Col>
          <Col md="auto" className="text-center">
            <h3>What is Sell?</h3>
            <p>Sell is for people who are looking to sell a certain textbook.</p>
            <p>After typing in what you are looking for, it will show a list of buyers for that textbook.</p>
            <p>Target: Sellers</p>
          </Col>
        </Row>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkpurple text-white">
          <Col md="auto" className="d-none d-md-block">
            <Image src={Trade} fluid />
          </Col>
          <Col md="auto" className="text-center">
            <h3>What is Trade?</h3>
            <p>Trade is for people who are looking to trade a certain textbook for another textbook.</p>
            <p>After typing in what you are looking for, it will show a specific textbooks that the owner is willing to trade it for.</p>
            <p>Target: Both Buyers and Sellers</p>
          </Col>
        </Row>
        <Row className="my-4 mx-3 p-4 justify-content-center bg-darkorange text-white">
          <Col md="auto" className="d-none d-md-block">
            <Image src={Swap} fluid />
          </Col>
          <Col md="auto" className="text-center">
            <h3>What is Swap?</h3>
            <p>Swap is similar to trade, except it is more flexible.</p>
            <p>Swap is flexible by how the textbooks that are being swapped, does not have to be around the same price range.</p>
            <p>Target: Both Buyers and Sellers</p>
          </Col>
        </Row>
      </Container>
    );
  }
}