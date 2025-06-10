import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import { prepareMovieData } from './utils/utils'


//Fetching movie data from the TMDb API
// Looping through the fetched data and creating a MovieCard component for each individual movie
// Arranging all the MovieCard components nicely on the screen
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
            <MovieCard key={movie.id} movie={movie}/> 
          )
        })
      }
    </div>
  )
}

export default MovieList