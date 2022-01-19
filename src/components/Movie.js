import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteMovie } from "../actions/movieActions";

const Movie = (props) => {
  console.log(props);
  const { id } = useParams();
  const { push } = useHistory();

  const movies = props.movies;
  const movie = movies.find((movie) => movie.id === Number(id));
  const handleDeleteMovie = () => {
    props.deleteMovie(movie.id);
    console.log("DELETE HERE");
    push("/movies");
    // console.log(push);
  };
  console.log(props.movies);

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movies.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movies.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movies.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movies.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movies.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movies.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                <span className="m-2 btn btn-dark">Favorite</span>
                <span className="delete">
                  <input
                    type="button"
                    className="m-2 btn btn-danger"
                    value="Delete"
                    onClick={handleDeleteMovie}
                  />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { deleteMovie })(Movie);
