import React from "react";
import { Container, Row } from "react-bootstrap";
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
      let filteredBooks = categories.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 10) });
      console.log(filteredBooks);
    } else {
      this.setState({ books: this.props.genre.slice(0, 10) });
    }
  };

  state = {
    selectedBook: categories[0],
  };

  render() {
    return (
      <Container>
        <h1 className="text-center">List Of Books</h1>
        <Row>
          <h2>HORROR</h2>
          <SingleBook genre={horror} />
          <h2>SCIFI</h2>
          <SingleBook genre={scifi} />
          <h2>ROMANCE</h2>
          <SingleBook genre={romance} />
          <h2>HISTORY</h2>
          <SingleBook genre={history} />
          <h2>FANTASY</h2>
          <SingleBook genre={fantasy} />
        </Row>
      </Container>
    );
  }
}

export default BookList;
