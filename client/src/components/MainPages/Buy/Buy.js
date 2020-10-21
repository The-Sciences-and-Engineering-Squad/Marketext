import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import RenderTextbooks from '../RenderTextbooks/RenderTextbooks';
import './Buy.css'

export default class Buy extends React.Component {
  componentDidMount() {
    // Insert Backend Call For Textbooks When Nothing is on Search
    fetch('https://www.googleapis.com/books/v1/volumes?q=math&projection=full&printType=books&orderBy=newest&maxResults=40')
    .then(response => response.json())
    .then(result => {
        if(result.items !== null){
          for(let i=0;i<result.items.length;i++){
            if (result.items[i].volumeInfo.imageLinks === null ){
              continue;
            }
            let hasISBN = result.items[i].volumeInfo.industryIdentifiers;
            var books = this.state.textbooks.concat({
              id: result.items[i].id,
              title: result.items[i].volumeInfo.title,
              author: result.items[i].volumeInfo.authors, 
              image: result.items[i].volumeInfo.imageLinks.thumbnail,
              description: result.items[i].volumeInfo.description,
              ISBN: hasISBN !== undefined ? result.items[i].volumeInfo.industryIdentifiers:null, 
            });
            this.setState({ textbooks: books });
          }
      }
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      textbooks: [],
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
          this.setState({ textbooks: [] });
          for(let i=0;i<result.items.length;i++){
            if (result.items[i].volumeInfo.imageLinks == null ){
              continue;
            }
            let hasISBN = result.items[i].volumeInfo.industryIdentifiers;
            var books = this.state.textbooks.concat({
              id: result.items[i].id,
              title: result.items[i].volumeInfo.title,
              author: result.items[i].volumeInfo.authors, 
              image: result.items[i].volumeInfo.imageLinks.thumbnail,
              description: result.items[i].volumeInfo.description,
              ISBN: hasISBN !== undefined ? result.items[i].volumeInfo.industryIdentifiers:null,              
          });
            this.setState({ textbooks: books });
          }
        }
      })
    }
  }

  render() {
    return (
      <Container fluid>
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
        <RenderTextbooks textbooks={this.state.textbooks} target="Seller" />
      </Container>
    );
  }
}