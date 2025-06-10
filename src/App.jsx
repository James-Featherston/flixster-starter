import { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

const App = () => {
  
  const [movieData, setMovieData] = useState(null)

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json();
      setMovieData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div className="App">
      <header id="header-container">
        <h1>Flixster</h1>
        <SearchForm/>
      </header>
      <main id="main-container">
        <MovieList/>
      </main>
    </div>
  )
}

export default App
