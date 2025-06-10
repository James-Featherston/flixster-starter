import React, { useState } from 'react'
import movieImg from './assets/movie.jpeg'
import './MovieCard.css'
import MovieModal from './MovieModal'

// The movie's title
// The movie's poster image
// The movie's vote average
const MovieCard = ({movie}) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div onClick={() => setModal(!modal)} id="movie-card">
        <img id="movie-img" src={movie.poster} alt="" />
        <h2>{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
      </div>
      {
        modal && <MovieModal setModal={setModal} id={movie.id}/>
      }
    </>
  )
}

export default MovieCard