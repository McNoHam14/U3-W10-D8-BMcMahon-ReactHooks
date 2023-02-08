import { Component } from "react";
import image0 from "../assets/media/media0.jpg";
import image1 from "../assets/media/media1.jpg";
import image2 from "../assets/media/media2.jpg";
import image3 from "../assets/media/media3.jpg";
import image4 from "../assets/media/media4.jpg";
import image5 from "../assets/media/media5.jpg";
import image6 from "../assets/media/media6.jpg";
import image7 from "../assets/media/media7.jpg";
import image8 from "../assets/media/media8.jpg";
import image9 from "../assets/media/media9.jpg";
import image10 from "../assets/media/media10.jpg";
import image11 from "../assets/media/media11.jpg";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="genre-details">
            <div className="d-flex justify-content-between">
              <h3 className="text-light">TV Shows</h3>
              <button className="btn btn-outline-light dropdown-toggle genre-button">
                Genres
              </button>

              <div>
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn btn-outline-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-text-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-grid"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-gallery m-2">
            <h5 className="text-light mt-2 mb-2">Trending Now</h5>
            <div
              id="trending-now"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="movie-row">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image0}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image1}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image2}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image3}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image4}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image5}
                          alt="trending show"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="movie-row">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image6}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image7}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image8}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image9}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image10}
                          alt="trending show"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className="movie-cover"
                          src={image11}
                          alt="trending show"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#trending-now"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#trending-now"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
