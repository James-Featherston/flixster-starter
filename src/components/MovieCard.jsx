import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import MovieModal from "./MovieModal";
import movieImg from "../assets/movie.png";
import { movieDisplayTypes } from "../utils/utils";

const MovieCard = (props) => {
  const [modal, setModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [watched, setWatched] = useState(false);

  const handleWatchClick = (event) => {
    event.stopPropagation();
    if (watched) {
      props.removeWatchedMovie(props.movie);
    } else {
      props.addWatchedMovie(props.movie);
    }
    setWatched(!watched);
  };

  const handleLikedClick = (event) => {
    event.stopPropagation();
    if (liked) {
      props.removeLikedMovie(props.movie);
    } else {
      props.addLikedMovie(props.movie);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    if (props.movieDisplayType === movieDisplayTypes.favorites) {
      setLiked(true);
    } else if (props.movieDisplayType === movieDisplayTypes.watched) {
      setWatched(true);
    }
  }, [props.movieDisplayType]);

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
