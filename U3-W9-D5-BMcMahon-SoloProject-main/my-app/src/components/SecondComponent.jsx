import { Component } from "react";
import { Row, Col, Alert, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

// 447ab8e0
// http://www.omdbapi.com/?i=tt3896198&apikey=447ab8e0
// harry%20potter

class SecondComponent extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
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
          isLoading: false,
        });
      } else {
        console.log("error");
        this.setState({
          ...this.state,
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        {this.state.isError && <Alert variant="danger">Error!</Alert>}
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" />
        )}
        <h1 style={{ color: "white" }}>{this.props.category} Series</h1>
        <Row className="justify-content-center no-gutters">
          {this.state.movies.map((objectOfMovies) => {
            return (
              <Col xs={2} key={objectOfMovies.imdbID}>
                <SingleMovie objectOfMovies={objectOfMovies} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default SecondComponent;
