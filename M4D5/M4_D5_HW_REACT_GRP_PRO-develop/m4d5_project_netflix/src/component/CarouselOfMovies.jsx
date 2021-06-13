import { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import SingleMovie from "./SingleMovie/SingleMovie";

class CarouselOfMovies extends Component {
  state = {
    moviesArr: [],
  };

  componentDidMount = async () => {
    console.log("COMPONENTDIDMOUNT");

    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=88e0a7be&s=${this.props.search}`
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
    const { moviesArr } = this.state;

    return (
      <>
        <Container>
          <Carousel>
            <Carousel.Item>
              {moviesArr.slice(0, 6).map((movie) => (
                <SingleMovie
                  key={movie.imdbID}
                  img={movie.poster}
                  title={movie.Title}
                />
              ))}
            </Carousel.Item>
            <Carousel.Item>
              {moviesArr.slice(7, 14).map((movie) => (
                <SingleMovie
                  key={movie.imdbID}
                  img={movie.poster}
                  title={movie.Title}
                />
              ))}
            </Carousel.Item>
          </Carousel>
        </Container>
      </>
    );
  }
}

export default CarouselOfMovies;

// Old card format to change into carousel
//   <Card className="px-1">
//     <Image
//       className="coverimage"
//       src={movie.Poster}
//       alt={movie.Title}
//     />
//   </Card>
// ))}
