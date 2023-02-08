import { Component } from "react";
import { Carousel, Container, Row, Col, Stack } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class CarouselMovies extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=447ab8e0&s=${this.props.category}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        const dataMovie = data.Search;

        this.setState({
          ...this.state,
          movies: dataMovie,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h1 style={{ color: "white" }}>{this.props.category} Movie List</h1>
            <Carousel>
              {this.state.movies.map((objectOfMovies) => {
                return (
                  <Carousel.Item xs={2} key={objectOfMovies.imdbID}>
                    <div>
                      <SingleMovie objectOfMovies={objectOfMovies} />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CarouselMovies;
