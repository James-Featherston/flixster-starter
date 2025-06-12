import React, { useEffect, useState } from 'react'
import './MovieModal.css'
import { searchMovieById, searchTrailerById } from '../utils/services.js'
import { prepareSingleMovie, getMovieKey } from '../utils/utils.js'

const MovieModal = ({setModal, id}) => {
  const [movie, setMovie] = useState(null)
  const handleClose = () => {
    setModal(false)
  }
  useEffect (() => {
    const getMovie = async () => {
      let res = await searchMovieById(id)
      const videos = await searchTrailerById(id)
      console.log(videos)
      const movieKey = getMovieKey(videos)
      console.log(movieKey)
      const newMovie = prepareSingleMovie(res, movieKey)
      setMovie(newMovie)
    }
    getMovie()
  }, [])

  return (
    <div onClick={handleClose} id="modal-background">
        <article onClick={(event) => (event.stopPropagation())} id="modal-container">
          {
            movie !== null ?
            <div id="modal-content-container">
              <img id="modal-movie-img" src={movie.poster} alt={movie.title} />
              <div id="modal-text-content">
                <h1>{movie.title}</h1>
                <p className='modal-p'>Release Date: {movie.release_date}</p>
                <p className='modal-p'>{movie.overview}</p>
                <p className='modal-p'>Genres: {movie.genres}</p>
                <p className='modal-p'>Runtime: {movie.runtime} Minutes</p>
                <iframe id="player" className="video" type="text/html" width="350" height="200"
                  src={`http://www.youtube.com/embed/${movie.key}?enablejsapi=1`} allowFullScreen
                  ></iframe>
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