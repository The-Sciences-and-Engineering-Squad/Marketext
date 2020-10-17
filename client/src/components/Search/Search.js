import React, { Component } from 'react'
import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Search.css'

export default class Search extends Component {
  render() {
    return (
      <Form>
        <InputGroup className="searchbar pt-4">
          <FormControl
            placeholder="Search by ISBN, title or author's name"
            aria-label="Search by ISBN, title or author's name"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /></Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    )
  }
}
