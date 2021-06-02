import { Card, Col, Badge, Button } from "react-bootstrap";

import "./singleBook.css";

function selectBook(e) {
  const element = e.currentTarget;
  element.classList.toggle("selectedCard");
}

function SingleBook(book) {
  // const [open, setOpen] = useState(false);
  let genreColor = book.category === "fantasy" ? "blue" : "red";
  //  book.category === "romance" ? '#fff' :  book.category === "horror" ? "yellow" :  book.category === "scifi" ? "green" :  book.category === "history" ? "orange" : "white"
  return (
    <Col lg={3} md={4} sm={6} className="p-3">
      <Card
        key={book.asin}
        onClick={selectBook}
        className="h-100 w-100 text-center"
      >
        <Badge style={{ backgroundColor: { genreColor } }}>
          {book.category.length === 0 ? "Uncatagorized" : book.category}
        </Badge>
        <Card.Img variant="top" src={book.img} />
        <Card.Body style={{ color: { genreColor } }}>
          <h3>
            {book.title.length > 50
              ? book.title.substr(0, 50) + "..."
              : book.title}
          </h3>
          <h4>${book.price}</h4>
        </Card.Body>
        <Card.Footer>
          <Button className="btn btn-dark">Add To Cart</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}
export { selectBook };
export default SingleBook;
