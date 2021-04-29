import React from "react";
import { Container, Row, InputGroup, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook.jsx";

import fantasy from "../json/fantasy.json";
import history from "../json/history.json";
import horror from "../json/horror.json";
import romance from "../json/romance.json";
import scifi from "../json/scifi.json";

let categories = [fantasy, horror, history, romance, scifi];

class BookList extends React.Component {
  handleSearchQuery = (searchQuery) => {
    if (searchQuery) {
      console.log(searchQuery);
      let filteredBooks = horror.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ filteredBooks });
      console.log(filteredBooks);
    } else {
      this.setState({ books: this.props.horror });
    }
  };

  state = {
    selectedBook: horror[0],
  };

  render() {
    return (
      <Container>
        <InputGroup>
          <FormControl
            placeholder="Search Books by Title"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              this.handleSearchQuery(e.target.value);
            }}
          />
        </InputGroup>

        <h1 className="text-center">List Of Books</h1>
        <Row>
          <h2>HORROR</h2>
          {/* {this.props.genre.map((book) => ( */}
          <SingleBook genre={this.state.filteredBooks || horror} />
          {/* ))} */}
          {/* <h2>SCIFI</h2> */}
          {/* <SingleBook genre={scifi} />
          <h2>ROMANCE</h2>
          <SingleBook genre={romance} />
          <h2>HISTORY</h2>
          <SingleBook genre={history} />
          <h2>FANTASY</h2>
          <SingleBook genre={fantasy} /> */}
        </Row>
      </Container>
    );
  }
}

export default BookList;
