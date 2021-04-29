import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import "./singleBook.css";

// class SingleBook extends React.Component {
//   selectBook = (e) => {
//     const element = e.currentTarget;
//     element.classList.toggle("selectedCard");
//   };

function SingleBook(book) {
  return (
    <Row>
      <Col>
        <Card
          key={book.asin}
          onClick={() => this.setState({ selectedBook: book })}
          className="h-100 w-100"
          style={{ minWidth: "250px" }}
        >
          <img className="d-block w-100" src={book.img} alt="BookImage" />
          <Card.Body>
            <h3>{book.title}</h3>
            <p>{book.asin}</p>
            <h4>{book.price}</h4>
            <h4>{book.catagory}</h4>
          </Card.Body>
        </Card>
      </Col>
      ;
    </Row>
  );
}

export default SingleBook;
