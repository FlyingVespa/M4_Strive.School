import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";
import Loading from "../Loading.jsx";

import "./singleBook.css";

class SingleBook extends Component {
  state = {
    // asin: this.props.asin,
    // category: this.props.category,
    // title: this.props.title,
    // img: this.props.img,
    // price: this.props.price,
    isSelected: false,
    selectedBook: {},
    isLoading: true,
  };
  componentDidMount() {
    console.log("Single book", this.props.book);
  }

  selectBook = () => this.setState({ isSelected: false });

  render() {
    // const { title, asin, img, category, price } = this.props;
    const selectBook = (e) => {
      const element = e.currentTarget;
      element.classList.toggle("selectedCard");
    };
    return (
      <Col lg={3} md={4} sm={6} className="p-3">
        <Card
          // key={this.props.book.asin}
          onClick={selectBook}
          className="h-100 w-100 text-center"
        >
          {/* <MyBadge category={this.props.book.category} /> */}
          {/* <Card.Img variant="top" src={this.props.book.img} /> */}
          {/* {this.state.isLoading && <Loading />} */}
          <Card.Body>
            <h3>
              {/* {this.book.title.length > 50
                ? title.substr(0, 50) + "..."
                : title} */}
            </h3>
            {/* <h4>${this.props.book.price}</h4> */}
            {/* <h4>{this.props.book.asin}</h4> */}
          </Card.Body>
          <Card.Footer>
            <Button className="btn btn-dark">Add To Cart</Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
