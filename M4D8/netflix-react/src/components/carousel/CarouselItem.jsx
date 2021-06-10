import { Col, Row, Image, Container } from "react-bootstrap";
import React, { Component } from "react";

export default class CarouselItem extends Component {
  state = {
    moviesArr: [],
    selectedTest: {},
  };

  componentDidMount = async () => {
    const APIkey = "apikey=88e0a7be";
    const urlOmdApi = "http://www.omdbapi.com/";

    console.log("COMPONENTDIDMOUNT");
    try {
      let response = await fetch(
        `${urlOmdApi}?${APIkey}&s=${this.props.search}`
      );
      console.log("what is this", response);
      let movies = await response.json();
      let arrray = movies.Search;
      console.log("MOVIES", arrray);
      this.setState({
        moviesArr: arrray,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            {this.state.moviesArr.map((movie) => (
              <Col id="moviecard" className="px-1">
                <Image
                  className="coverimage"
                  src={movie.Poster}
                  alt={movie.Title}
                  onClick={this.setState({ selectedTest: e.target.value })}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
