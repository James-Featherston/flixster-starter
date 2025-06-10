import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import { prepareMovieData } from './utils/utils'

const MovieList = (props) => {
  if (!props.movieData) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const preparedMovieData = prepareMovieData(props.movieData)
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