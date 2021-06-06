import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";
import Loading from "../Loading.jsx";
import Error from "../Error.jsx";

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
    // const { isLoading, isError } = this.state;
    const selectBook = (e) => {
      const element = e.currentTarget;
      element.classList.toggle("selectedCard");
    };
    return (
      <Col lg={3} md={4} sm={6} className="p-3">
        {/* {this.props.b.length === 0 ? (
          <p>Empty</p>
        ) : ( */}
        <Card
          key={this.props.b.asin}
          onClick={selectBook}
          className="h-100 w-100 text-center"
        >
          <MyBadge category={this.props.b.category} />
          <Card.Img variant="top" src={this.props.b.img} />
          <Card.Body>
            <h3>
              {this.props.b.title.length > 50
                ? this.props.b.title.substr(0, 50) + "..."
                : this.props.b.title}
            </h3>
            <h4>${this.props.b.price}</h4>
            <h6>{this.props.b.asin}</h6>
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
