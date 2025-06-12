import React, { useEffect, useState } from "react";
import "./MovieModal.css";
import { searchMovieById, searchTrailerById } from "../utils/services.js";
import { prepareSingleMovie, getMovieKey } from "../utils/utils.js";
import movieImg from "../assets/movie.png";

const MovieModal = ({ setModal, id }) => {
  const [movie, setMovie] = useState(null);
  const handleClose = () => {
    setModal(false);
  };
  useEffect(() => {
    const getMovie = async () => {
      let res = await searchMovieById(id);
      const videos = await searchTrailerById(id);
      const movieKey = getMovieKey(videos);
      const newMovie = prepareSingleMovie(res, movieKey);
      setMovie(newMovie);
    };
    getMovie();
  }, []);
  return (
    <div onClick={handleClose} className="modal-background">
      <article
        onClick={(event) => event.stopPropagation()}
        className="modal-container"
      >
        {movie !== null ? (
          <div className="modal-content-container">
            <img
              className="modal-movie-img"
              src={movie.poster === null ? movieImg : movie.poster}
              alt={movie.title}
            />
            <div className="modal-text-content">
              <h1>{movie.title}</h1>
              <p className="modal-p">Release Date: {movie.release_date}</p>
              <p className="modal-p">{movie.overview}</p>
              <p className="modal-p">Genres: {movie.genres}</p>
              <p className="modal-p">Runtime: {movie.runtime} Minutes</p>
              <iframe
                id="player"
                className="video"
                type="text/html"
                width="350"
                height="200"
                src={`https://www.youtube.com/embed/${movie.key}?enablejsapi=1`}
                allowFullScreen
              ></iframe>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        ) : (
          <p>Loading Movie</p>
        )}
      </article>
    </div>
  );
};

export default MovieModal;
