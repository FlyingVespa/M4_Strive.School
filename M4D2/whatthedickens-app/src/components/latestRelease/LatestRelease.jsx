import { Component } from "react";
import { Row, Container } from "react-bootstrap";
import SingleBook from "../singleBookComponent/SingleBook";

import Scifi from "../../json/scifi.json";

class LatestRelease extends Component {
  state = {
    featuredBooks: Scifi,
  };

  render() {
    return (
      <Container>
        <h2 className="text-center">Featured Books</h2>
        <Row className="no-gutters">
          {this.state.featuredBooks.slice(1, 4).map((book) => (
            <SingleBook
              title={book.title}
              img={book.img}
              key={book.asin}
              category={book.category}
              price={book.price}
            />
          ))}
        </Row>
        ;
      </Container>
    );
  }
}
export default LatestRelease;
