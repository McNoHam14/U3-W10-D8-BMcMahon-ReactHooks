import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./components/NetflixNavbar.jsx";
import MainComponent from "./components/MainComponent.jsx";
import SecondComponent from "./components/SecondComponent.jsx";
import ThirdComponent from "./components/ThirdComponent.jsx";
import CarouselMovies from "./components/CarouselMovies";
// import TVShows from "./components/TVShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <NetflixNavbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainComponent />
                <ThirdComponent />
                <CarouselMovies category={"Harry Potter"} />
              </>
            }
          />

          <Route
            element={
              <>
                <SecondComponent category={"Lost"} />
                <SecondComponent category={"Scrubs"} />
                <SecondComponent category={"Friends"} />
              </>
            }
            path="/tv-shows"
          />
          <Route
            path="/movie-details/:movieId"
            element={
              <>
                <MovieDetails />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
