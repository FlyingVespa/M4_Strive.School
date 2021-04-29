import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import "../assets/css/card.css";
import MyBadge from "./MyBadge";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  selectBook = (e) => {
    const element = e.currentTarget;
    element.classList.toggle("selectedCard");
  };

  render() {
    return (
      <Row>
        {this.props.genre.map((book) => (
          <Col xs={1} md={3} lg={2} className="mb-2 text-center">
            <Card
              // key={book.asin}
              onClick={() => this.setState({ selectedBook: book })}
              className="h-100 w-100"
              onClick={this.selectBook}
            >
              <img className="d-block w-100" src={book.img} alt="First-Book" />
              <Card.Body className="p-1">
                <h6>{book.title}</h6>
                <span className="p-0 fs-6 fw-light">{book.asin}</span>
                <MyBadge category={this.props.category} />
                <p className="align-self-end" style={{ color: "red" }}>
                  {" "}
                  $ {book.price}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
export default SingleBook;
