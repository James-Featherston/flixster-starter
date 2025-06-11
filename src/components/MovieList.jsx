import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import { prepareMoviesData } from '../utils/utils'
import { sortMoviesAlphabetically, sortMoviesByVoteAverage, sortMoviesChronologically } from '../utils/sort-filter'
import { movieSortTypes } from '../utils/utils'

const MovieList = (props) => {
  if (!props.movieData) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const preparedMovieData = prepareMoviesData(props.movieData)
  if (props.sortType === movieSortTypes.alphabetic) {
    sortMoviesAlphabetically(preparedMovieData)
  } else if (props.sortType === movieSortTypes.voteAverage) {
    sortMoviesByVoteAverage(preparedMovieData)
  } else if (props.sortType === movieSortTypes.chronological) {
    sortMoviesChronologically(preparedMovieData)
  }
  return (
    <section id='list-container'>
      {
        preparedMovieData.map(movie => {
          return (
            <MovieCard movie={movie}/> 
          )
        })
      }
    </section>
  )
}

export default MovieList