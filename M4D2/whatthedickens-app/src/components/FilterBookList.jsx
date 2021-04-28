import React from "react";

import SingleBook from "./SingleBook";

import fantasy from "../json/fantasy.json";
import history from "../json/history.json";
import horror from "../json/horror.json";
import romance from "../json/romance.json";
import scifi from "../json/scifi.json";

// import SingleBook from "./SingleBook.jsx"

import { Row, InputGroup, FormControl } from "react-bootstrap";

let categories = [fantasy, horror, history, romance, scifi];

class SearchBook extends React.Component {
  state = {
    books: categories,
  };

  handleSearchQuery = (searchQuery) => {
    if (searchQuery) {
      console.log(searchQuery);
      let filteredBooks = categories.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      this.setState({ books: filteredBooks.slice(0, 12) });
      console.log(filteredBooks);
    } else {
      this.setState({ books: fantasy.slice(0, 12) });
    }
  };
  render() {
    return (
      <>
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
        <Row className="mt-4">
          {this.state.books ? (
            this.state.books.map((book) => {
              return (
                <SingleBook
                  title={book.title}
                  image={book.img}
                  key={book.asin}
                  category={book.category}
                  price={book.price}
                />
              );
            })
          ) : (
            <div> Nothing here </div>
          )}
        </Row>
      </>
    );
  }
}
export default SearchBook;
