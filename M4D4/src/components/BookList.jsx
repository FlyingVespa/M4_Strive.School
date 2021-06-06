import { Component } from "react";
import { Container, Row, InputGroup, FormControl } from "react-bootstrap";
import SingleBook from "./singleBookComponent/SingleBook.jsx";
import Loading from "./Loading.jsx";
import Fantasy from "../json/fantasy.json";
import History from "../json/history.json";
import Horror from "../json/horror.json";
import Romance from "../json/romance.json";
import Scifi from "../json/scifi.json";
// import FilterBooksList from "./FilterBooksList.jsx";

class BookList extends Component {
  state = {
    categories: [...Fantasy, ...Horror, ...History, ...Romance, ...Scifi],
    query: "",
    isLoading: true,
  };

  render() {
    return (
      <Container>
        <InputGroup>
          <FormControl
            type="text"
            value={this.state.searchQuery}
            placeholder="Search Books by Title"
            onChange={(e) => {
              this.setState({ searchQuery: e.target.value });
            }}
          />
        </InputGroup>
        <h2 className="text-center mb-5">List Of Books</h2>
        {this.state.isLoading && <Loading />}
        <Row className="m-2 no-gutters">
          {this.state.categories.length === 0 ? (
            <h4> No Books Found </h4>
          ) : (
            this.state.categories.map((book) => (
              <SingleBook
                title={book.title}
                img={book.img}
                key={book.asin}
                category={book.category}
                price={book.price}
              />
            ))
          )}
        </Row>
      </Container>
    );
  }
}
export default BookList;
