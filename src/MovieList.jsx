import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

//Fetching movie data from the TMDb API
// Looping through the fetched data and creating a MovieCard component for each individual movie
// Arranging all the MovieCard components nicely on the screen
const MovieList = () => {
  return (
    <div id='list-container'>
      <MovieCard/> 
    </div>
  )
}

export default MovieList