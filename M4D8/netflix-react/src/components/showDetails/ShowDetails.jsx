import { Component } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";

class ShowDetails extends Component {
  state = {
    movieToShow: null,
    movies: [],
  };

  componentDidMount = async (props) => {
    const APIKEY = "88e0a7be";
    const API = "http://www.omdbapi.com/";
    let searchQuery = "";

    try {
      const response = await fetch(`${API}?apikey=${APIKEY}&s=${searchQuery}`);
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("HERE", data.Search);
        // console.log(this.props.history);
        this.setState({
          movies: data.Search,
        });
      } else {
        console.log("we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }

    let idFromUrl = this.props.match.params.check;
    console.log("How it looks like", idFromUrl);
    console.log("MOVIES ARRAY", this.state.movies);
    let foundedMovie = this.state.movies.find(
      (movie) => movie.imdbID === idFromUrl
    );
    if (foundedMovie) {
      console.log("FOUNDED MOVIE", foundedMovie);
      this.setState({
        movieToShow: foundedMovie,
      });
      console.log("CHECK STATE HERE", this.state);
    }
  };

  render() {
    return (
      <>
        {this.state.movieToShow && (
          <div>
            <h2> {this.state.movieToShow.Title}</h2>

            <Container>
              <Row>
                <Col xs={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={this.state.movieToShow.Poster}
                    />
                    <Card.Body>
                      <Card.Title>n</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush text-dark">
                      <ListGroupItem>
                        TYPE: {this.state.movieToShow.Type}
                      </ListGroupItem>
                      <ListGroupItem>
                        ID of Movie: {this.state.movieToShow.imdbID}
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
                <Col xs={8}>Place for comments:</Col>
              </Row>
            </Container>
          </div>
        )}
      </>
    );
  }
}

export default ShowDetails;
