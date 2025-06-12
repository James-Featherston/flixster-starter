import React, { useEffect, useState } from 'react'
import './MovieModal.css'
import { searchMovieById } from '../utils/services.js'
import { prepareSingleMovie } from '../utils/utils.js'
import movieImg from '../assets/movie.png'

const MovieModal = ({setModal, id}) => {
  const [movie, setMovie] = useState(null)
  const handleClose = () => {
    setModal(false)
  }
  useEffect (() => {
    const getMovie = async () => {
      let res = await searchMovieById(id)
      const newMovie = prepareSingleMovie(res)
      setMovie(newMovie)
      console.log("I'm being rerendered modal")
    }
    getMovie()
  }, [])
  return (
    <div onClick={handleClose} id="modal-background">
        <article onClick={(event) => (event.stopPropagation())} id="modal-container">
          {
            movie !== null ?
            <div id="modal-content-container">
              <img id="modal-movie-img" src={movie.poster === null ? movieImg : movie.poster} alt={movie.title} />
              <div id="modal-text-content">
                <h1>{movie.title}</h1>
                <p className='modal-p'>Release Date: {movie.release_date}</p>
                <p className='modal-p'>{movie.overview}</p>
                <p className='modal-p'>Genres: {movie.genres}</p>
                <p className='modal-p'>Runtime: {movie.runtime} Minutes</p>
                <button onClick={handleClose}>Close</button>
              </div>
            </div>
            :
            <p>Loading Movie</p>
          }
        </article>

    </div>
  )
}

export default MovieModal