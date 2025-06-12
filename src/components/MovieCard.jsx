import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import MovieModal from "./MovieModal";
import movieImg from "../assets/movie.png";
import { movieDisplayTypes } from "../utils/utils";

const MovieCard = (props) => {
  const [modal, setModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [watched, setWatched] = useState(false);

  /* Sets movie to watched */
  const handleWatchClick = (event) => {
    event.stopPropagation();
    props.toggleWatchedMovies(props.movie);
    setWatched(!watched);
  };
  /* Sets movie to liked */
  const handleLikedClick = (event) => {
    event.stopPropagation();
    props.toggleLikedMovies(props.movie);
    setLiked(!liked);
  };

  useEffect(() => {
    setLiked(() => {
      if (props.likedMovies[props.movie.id]) {
        return true;
      } else {
        return false;
      }
    });
    setWatched(() => {
      if (props.watchedMovies[props.movie.id]) {
        return true;
      } else {
        return false;
      }
    });
  }, []);

  return (
    <>
      <article onClick={() => setModal(!modal)} className="movie-card">
        <img
          className="movie-img"
          src={props.movie.poster === null ? movieImg : props.movie.poster}
          alt={props.movie.title}
        />
        <h2>{props.movie.title}</h2>
        <p>Rating: {props.movie.rating}</p>
        <div className="movie-buttons">
          {watched ? (
            <span
              onClick={handleWatchClick}
              className="material-symbols-outlined"
            >
              visibility
            </span>
          ) : (
            <span
              onClick={handleWatchClick}
              className="material-symbols-outlined"
            >
              visibility_off
            </span>
          )}
          {liked ? (
            <span
              onClick={handleLikedClick}
              className="material-symbols-outlined red_btn"
            >
              favorite
            </span>
          ) : (
            <span
              onClick={handleLikedClick}
              className="material-symbols-outlined"
            >
              favorite
            </span>
          )}
        </div>
      </article>
      {modal && <MovieModal setModal={setModal} id={props.movie.id} />}
    </>
  );
};

export default MovieCard;
