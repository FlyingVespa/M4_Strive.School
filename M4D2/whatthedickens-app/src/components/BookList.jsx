import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./singleBookComponent/SingleBook.jsx";

import Fantasy from "../json/fantasy.json";
import History from "../json/history.json";
import Horror from "../json/horror.json";
import Romance from "../json/romance.json";
import Scifi from "../json/scifi.json";

let categories = [...Fantasy, ...Horror, ...History, ...Romance, ...Scifi];

function BookList() {
  return (
    <Container>
      <img className="bgBook" src="./book.jpg" alt="" srcset="" />
      <h1 className="text-center">List Of Books</h1>
      <Row className="m-2 no-gutters">
        {categories.map((book) => (
          <SingleBook
            title={book.title}
            img={book.img}
            key={book.asin}
            // category={this.book.categories}
            price={book.price}
          />
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
