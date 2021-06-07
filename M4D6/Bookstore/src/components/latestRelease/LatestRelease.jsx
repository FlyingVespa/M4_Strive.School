import { Component } from "react";
import { Row, Container, Carousel, Col } from "react-bootstrap";
// import SingleBook from "../singleBookComponent/SingleBook";
import Loading from "../Loading.jsx";

import Scifi from "../../json/scifi.json";
import "./latestRelease.css";
class LatestRelease extends Component {
  state = {
    featuredBooks: Scifi,
    isLoading: true,
  };

  render() {
    return (
      <Container className="mb-5">
        <h2 className="text-center">Featured Books</h2>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <Carousel>
              {Scifi.slice(25, 32).map((sci, i) => (
                <Carousel.Item className="p-1">
                  <Row>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={sci.img}
                        alt={sci.asin + (i + 1)}
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={sci.img}
                        alt={sci.asin + (i + 1)}
                      />
                    </Col>
                    <Col>
                      <img
                        className="d-block w-100"
                        src={sci.img}
                        alt={sci.asin + (i + 1)}
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>

      // <Container>
      //   <h2 className="text-center">Featured Books</h2>
      //   <Row className="no-gutters">
      //     {this.state.featuredBooks.slice(1, 4).map((book) => (
      //       <SingleBook
      //         title={book.title}
      //         img={book.img}
      //         key={book.asin}
      //         category={book.category}
      //         price={book.price}
      //       />
      //     ))}
      //   </Row>
      //   ;
      // </Container>
    );
  }
}
export default LatestRelease;
