import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Searchbar.css'

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
    // Add Backend to set the state of searchTextbooks.
    if (this.state.search !== ''){
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.search + '&projection=full&printType=books&orderBy=newest&maxResults=40' )
      .then(response => response.json())
      .then(result => {
        if(result.items != null){
          var textbooks = [];
          for(let i=0;i<result.items.length;i++){
            if (result.items[i].volumeInfo.imageLinks == null ){
              continue;
            }
            let hasISBN = result.items[i].volumeInfo.industryIdentifiers;
            textbooks = textbooks.concat({
              id: result.items[i].id,
              title: result.items[i].volumeInfo.title,
              author: result.items[i].volumeInfo.authors, 
              image: result.items[i].volumeInfo.imageLinks.thumbnail,
              description: result.items[i].volumeInfo.description,
              ISBN: hasISBN !== undefined ? result.items[i].volumeInfo.industryIdentifiers:null,              
          });
          }
          this.props.textbookUpdate(textbooks);
        }
      })
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <InputGroup className="searchbar pt-4">
        <FormControl
          placeholder="Search by ISBN, Title or Author's Name"
          aria-label="Search by ISBN, Title or Author's Name"
          aria-describedby="TextbookSearch"
          value={this.state.search}
          onChange={this.handleChange("search")}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit" onClick={this.handleSubmit}><FontAwesomeIcon icon={faSearch} /></Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
    );
  }
}