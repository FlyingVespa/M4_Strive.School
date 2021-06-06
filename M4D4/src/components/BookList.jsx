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
    // categories: [...Fantasy, ...Horror, ...History, ...Romance, ...Scifi],
    allmybooks: null,
    query: "",
    isLoading: true,
  };

  async fetchbooks() {
    try {
      let sci = await require("../json/scifi.json");
      let his = await require("../json/history.json");
      let rom = await require("../json/romance.json");
      let fan = await require("../json/fantasy.json");
      let hor = await require("../json/horror.json");
      const bothbooks = await {
        ...sci,
        ...his,
        ...fan,
        ...rom,
        ...hor,
      };
      console.log("requrie methiod", bothbooks);
      this.setState({ allmybooks: bothbooks });

      // console.log(this.allmybooks[0]);
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  }

  componentDidMount() {
    this.fetchbooks();
  }

  render() {
    const { allmybooks } = this.state;
    console.log("all my books", allmybooks);
    console.log("all my books1111", allmybooks);
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
          {this.allmybooks &&
            this.allmybooks.map((book) => (
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
