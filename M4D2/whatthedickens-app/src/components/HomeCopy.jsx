import React from "react";
import { Carousel, Col, Container, Row, Card } from "react-bootstrap";


let categories = [fantasy, horror, history, romance, scifi];

class HomeCopy extends React.Component {

  render()
  return (
    <Row>
          
    (placeholder).map((book) => (
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
    ))
    ;
  </Row>
);

