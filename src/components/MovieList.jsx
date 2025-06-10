import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import { prepareMovieData } from '../utils/utils'
import { sortMoviesAlphabetically, sortMoviesByVoteAverage, sortMoviesChronologically } from '../utils/sort-filter'

const MovieList = (props) => {
  if (!props.movieData) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const preparedMovieData = prepareMovieData(props.movieData)
  if (props.sortType === "alphabetic") {
    sortMoviesAlphabetically(preparedMovieData)
  } else if (props.sortType === "vote-average") {
    sortMoviesByVoteAverage(preparedMovieData)
  } else if (props.sortType === "chronological") {
    sortMoviesChronologically(preparedMovieData)
  }
  return (
    <div id='list-container'>
      {
        preparedMovieData.map(movie => {
          return (
            <MovieCard movie={movie}/> 
          )
        })
      }
    </div>
  )
}

export default MovieList