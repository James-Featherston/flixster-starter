import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import { prepareMoviesData } from '../utils/utils'
import { sortMoviesAlphabetically, sortMoviesByVoteAverage, sortMoviesChronologically } from '../utils/sort-filter'
import { movieSortTypes, movieDisplayTypes } from '../utils/utils'
import Sidebar from './Sidebar'

const MovieList = (props) => {
  const [likedMovies, setLikedMovies] = useState([])
  const [watchedMovies, setWatchedMovies] = useState([])

  if (!props.movieData) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  console.log("I'm being rerendered")
  const addLikedMovie = (movie) => {
    setLikedMovies([...likedMovies, movie])
  }
  const removeLikedMovie = (targetMovie) => {
    setLikedMovies(likedMovies.filter(movie => movie.title !== targetMovie.title))
  }
  const addWatchedMovie = (movie) => {
    setWatchedMovies([...watchedMovies, movie])
  }
  const removeWatchedMovie = (targetMovie) => {
    setWatchedMovies(watchedMovies.filter(movie => movie.title !== targetMovie.title))
  }

  let preparedMovieData = null
  if (props.movieDisplayType === movieDisplayTypes.nowPlaying || props.movieDisplayType === movieDisplayTypes.searchMovies) {
    preparedMovieData = prepareMoviesData(props.movieData)
  } else if (props.movieDisplayType === movieDisplayTypes.favorites) {
    preparedMovieData = likedMovies 
  } else {
    preparedMovieData = watchedMovies
  }
  console.log(preparedMovieData)
  if (props.sortType === movieSortTypes.alphabetic) {
    sortMoviesAlphabetically(preparedMovieData)
  } else if (props.sortType === movieSortTypes.voteAverage) {
    sortMoviesByVoteAverage(preparedMovieData)
  } else if (props.sortType === movieSortTypes.chronological) {
    sortMoviesChronologically(preparedMovieData)
  }
  console.log("Am I getting here")

  return (
    <>
      <section id='list-container'>
        {
          preparedMovieData.map(movie => {
            return (
              <MovieCard movie={movie}
                addLikedMovie={addLikedMovie} removeLikedMovie={removeLikedMovie}
                addWatchedMovie={addWatchedMovie} removeWatchedMovie={removeWatchedMovie}
                movieDisplayType={props.movieDisplayType}
              /> 
            )
          })
        }
      </section>
      <Sidebar
        setSidebarState={props.setSidebarState} sidebarState={props.sidebarState}
        handleDataChange={props.handleDataChange}
      />
    </>
  )
}

export default MovieList