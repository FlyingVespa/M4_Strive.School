import React from "react";
import { Carousel, Col, Container, Row, Card } from "react-bootstrap";

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
        <Row className="justify-content-center mt-3">
          <h1>List Of Books</h1>

          <Row>
            {scifi.map((book) => (
              <Col>
                <Card
                  key={book.asin}
                  onClick={() => this.setState({ selectedBook: book })}
                  className="h-100 w-100"
                >
                  <img
                    className="d-block w-100"
                    src={book.img}
                    alt="First-Book"
                  />
                  <Card.Body>
                    <h3>{book.title}</h3>
                    <p>{book.asin}</p>
                    <h4>{book.price}</h4>
                    <h4>{book.catagory}</h4>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            ;
          </Row>
          <Carousel>
            {history.map((book) => (
              <Carousel.Item
                key={book.asin}
                onClick={() => this.setState({ selectedBook: book })}
              >
                <img
                  className="d-block w-100"
                  src={book.img}
                  alt="First-Book"
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.asin}</p>
                  <h4>{book.price}</h4>
                  <h4>{book.catagory}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            ;
          </Carousel>
          <Carousel>
            {romance.map((book) => (
              <Carousel.Item
                key={book.asin}
                onClick={() => this.setState({ selectedBook: book })}
              >
                <img
                  className="d-block w-100"
                  src={book.img}
                  alt="First-Book"
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.asin}</p>
                  <h4>{book.price}</h4>
                  <h4>{book.catagory}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            ;
          </Carousel>
        </Row>
      </Container>
    );
  }
}

export default Home;
