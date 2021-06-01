import { Component } from "react";
import { Image, Container, Row } from "react-bootstrap";
import SingleBook from "./singleBookComponent/SingleBook.jsx";

import Fantasy from "../json/fantasy.json";
import History from "../json/history.json";
import Horror from "../json/horror.json";
import Romance from "../json/romance.json";
import Scifi from "../json/scifi.json";
import book from "../assets/img/book.jpg";
class BookList extends Component {
  state = {
    categories: [...Fantasy, ...Horror, ...History, ...Romance, ...Scifi],
  };

  // deselectAllBooks = (e) => {
  //   const el = document.querySelectorAll(".selectCard");
  //   el.forEach((element) => {
  //     element.remove(".selectCard");
  //   });
  // };

  render() {
    return (
      <Container>
        {/* <Button onClick={this.deselectAllBooks()}>Remove Selc</Button> */}
        <Image className="bgBook" src={book} alt="book"></Image>
        <h2 className="text-center">List Of Books</h2>
        <Row className="m-2 no-gutters">
          {this.state.categories.map((book) => (
            <SingleBook
              title={book.title}
              img={book.img}
              key={book.asin}
              category={book.category}
              price={book.price}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
