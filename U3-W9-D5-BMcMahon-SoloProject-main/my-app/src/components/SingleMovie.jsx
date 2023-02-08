import { useNavigate } from "react-router-dom";

const SingleMovie = (props) => {
  const navigate = useNavigate();
  console.log(props);
  return (
    <>
      <img
        onClick={() => {
          navigate(`/movie-details/${props.objectOfMovies.imdbID}`);
        }}
        key={props.objectOfMovies.imdbID}
        src={props.objectOfMovies.Poster}
        alt="movie title"
        className="h-50 w-50"
      />
    </>
  );
};

export default SingleMovie;
