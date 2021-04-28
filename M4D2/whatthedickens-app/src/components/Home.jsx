import React from "react";
import { Container, Row } from "react-bootstrap";
import Book from "./Book.jsx";

import fantasy from "../json/fantasy.json";
import history from "../json/history.json";
import horror from "../json/horror.json";
import romance from "../json/romance.json";
import scifi from "../json/scifi.json";

let categories = [fantasy, horror, history, romance, scifi];

class Home extends React.Component {
  state = {
    selectedBook: categories[0],
  };

  render() {
    return (
      <Container>
        <h1 className="text-center">List Of Books</h1>
        <Row>
          <h2>HORROR</h2>
          <Book genre={horror} />
          <h2>SCIFI</h2>
          <Book genre={scifi} />
          <h2>ROMANCE</h2>
          <Book genre={romance} />
          <h2>HISTORY</h2>
          <Book genre={history} />
          <h2>FANTASY</h2>
          <Book genre={fantasy} />
        </Row>
      </Container>
    );
  }
}

export default Home;
