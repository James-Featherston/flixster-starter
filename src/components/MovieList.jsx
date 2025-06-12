import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import { prepareMoviesData } from "../utils/utils";
import {
  sortMoviesAlphabetically,
  sortMoviesByVoteAverage,
  sortMoviesChronologically,
} from "../utils/sort-filter";
import { movieSortTypes, movieDisplayTypes } from "../utils/utils";
import Sidebar from "./Sidebar";
import { searchMovieById } from "../utils/services";

const MovieList = (props) => {
  const [likedMovies, setLikedMovies] = useState({});
  const [watchedMovies, setWatchedMovies] = useState({});

  if (!props.movieData) {
    return <div>Loading...</div>;
  }
  /* The following functions add/remove movies from the liked and watched lists */
  const toggleLikedMovies = (movie) => {
    setLikedMovies((prevLikedMovies) => {
      if (prevLikedMovies[movie.id]) {
        const { [movie.id]: trash, ...rest } = prevLikedMovies;
        return rest;
      } else {
        return { ...prevLikedMovies, [movie.id]: movie };
      }
    });
  };

  const toggleWatchedMovies = (movie) => {
    setWatchedMovies((prevWatchedMovies) => {
      if (prevWatchedMovies[movie.id]) {
        const { [movie.id]: trash, ...rest } = prevWatchedMovies;
        return rest;
      } else {
        return { ...prevWatchedMovies, [movie.id]: movie };
      }
    });
  };

  /* Prepares data based on display type and sort type */
  let preparedMovieData = null;
  if (
    props.movieDisplayType === movieDisplayTypes.nowPlaying ||
    props.movieDisplayType === movieDisplayTypes.searchMovies
  ) {
    preparedMovieData = prepareMoviesData(props.movieData);
  } else if (props.movieDisplayType === movieDisplayTypes.favorites) {
    preparedMovieData = Object.values(likedMovies);
  } else {
    preparedMovieData = Object.values(watchedMovies);
  }
  if (props.sortType === movieSortTypes.alphabetic) {
    sortMoviesAlphabetically(preparedMovieData);
  } else if (props.sortType === movieSortTypes.voteAverage) {
    sortMoviesByVoteAverage(preparedMovieData);
  } else if (props.sortType === movieSortTypes.chronological) {
    sortMoviesChronologically(preparedMovieData);
  }

  return (
    <>
      <section className="list-container">
        {preparedMovieData.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleLikedMovies={toggleLikedMovies}
              toggleWatchedMovies={toggleWatchedMovies}
              movieDisplayType={props.movieDisplayType}
              likedMovies={likedMovies}
              watchedMovies={watchedMovies}
            />
          );
        })}
      </section>
      <Sidebar
        setSidebarState={props.setSidebarState}
        sidebarState={props.sidebarState}
        handleDataChange={props.handleDataChange}
      />
    </>
  );
};

export default MovieList;
