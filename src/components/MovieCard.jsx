import React, { useState } from 'react'
import './MovieCard.css'
import MovieModal from './MovieModal'

const MovieCard = ({movie}) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <article onClick={() => setModal(!modal)} id="movie-card">
        <img id="movie-img" src={movie.poster} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Rating: {movie.rating}</p>
      </article>
      {
        modal && <MovieModal setModal={setModal} id={movie.id}/>
      }
    </>
  )
}

export default MovieCard