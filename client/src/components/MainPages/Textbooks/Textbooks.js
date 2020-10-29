import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import './Textbooks.css'

export default class Textbooks extends React.Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    console.log(id)
  }
  render() {
    const state = this.props.location.state;

    return (
      <Row className="row-resize">
        <Col>
          Textbooks
        </Col>
      </Row>
    );
  }
}