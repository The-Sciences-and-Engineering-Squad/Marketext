import React from 'react';
import Container from 'react-bootstrap/Container';

import Searchbar from '../Searchbar/Searchbar';
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
            var books = this.state.textbooks.concat({
              id: result.items[i].id,
              title: result.items[i].volumeInfo.title,
              author: result.items[i].volumeInfo.authors, 
              image: result.items[i].volumeInfo.imageLinks.thumbnail,
            });
            this.setState({ textbooks: books });
          }
      }
    })
  }

  constructor() {
    super();
    this.state = {
      search: "",
      textbooks: [],
    };
  }

  textbookUpdate = (textbooks) => {
    this.setState({ textbooks: textbooks});
  }

  render() {
    return (
      <Container fluid>
        <Searchbar textbookUpdate={this.textbookUpdate} />
        <RenderTextbooks textbooks={this.state.textbooks} page="Buy" target="Sellers" />
      </Container>
    );
  }
}