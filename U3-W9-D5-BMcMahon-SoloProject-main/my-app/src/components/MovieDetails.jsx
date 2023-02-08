import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const MovieDetails = (props) => {
  const params = useParams();
  console.log(params.movieId);
  const [movie, setMovie] = useState(null);
  const fetchMovie = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=447ab8e0&i=${params.movieId}`
    );
    let data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card>
          <h1 style={{ color: "black" }}>{movie?.Title}</h1>
          <img src={movie?.Poster} alt="poster" />
        </Card>
      </div>
    </>
  );
};

export default MovieDetails;
