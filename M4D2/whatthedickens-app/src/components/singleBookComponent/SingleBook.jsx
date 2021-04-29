import React from "react";
import { Card, Col, Badge } from "react-bootstrap";
import "./singleBook.css";

function selectBook(e) {
  const element = e.currentTarget;
  element.classList.toggle("selectedCard");
}

function SingleBook(book) {
  // const [open, setOpen] = useState(false);

  return (
    <Col lg={3} md={4} sm={6} className="p-3">
      <Card
        key={book.asin}
        onClick={selectBook}
        className="h-100 w-100 text-center"
      >
        <Badge>Genre</Badge>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <h3>{book.title}</h3>
          <p>{book.asin}</p>
          <h4>${book.price}</h4>
          <h4>{book.catagory}</h4>
        </Card.Body>
      </Card>
    </Col>
  );
}
export { selectBook };
export default SingleBook;
