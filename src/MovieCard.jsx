import React from 'react'
import movieImg from './assets/movie.jpeg'
import './MovieCard.css'

// The movie's title
// The movie's poster image
// The movie's vote average
const MovieCard = () => {
  return (
    <div id="movie-card">
      <img id="movie-img" src={movieImg} alt="" />
      <h2>Movie Title</h2>
      <p>Rating: XXX</p>
    </div>
  )
}

export default MovieCard