import React from 'react'
import movieImg from './assets/movie.jpeg'
import './MovieCard.css'

// The movie's title
// The movie's poster image
// The movie's vote average
const MovieCard = ({movie}) => {
  return (
    <div id="movie-card">
      <img id="movie-img" src={movie.poster} alt="" />
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
    </div>
  )
}

export default MovieCard