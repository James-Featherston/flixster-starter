import { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

const App = () => {
  
  const [movieData, setMovieData] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json();
      console.log(data)
      if (movieData.length === 0) {
        setNumPages(data.total_pages)
      }
      setMovieData([...movieData, ...data.results])
    } catch (error) {
      console.error(error)
    }
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="App">
      <header id="header-container">
        <h1 id="title">Flixster</h1>
        <SearchForm/>
      </header>
      <main id="main-container">
        <MovieList movieData={movieData}/>
        {
          page <= numPages ? 
          <button style={{marginBottom: "20px"}} onClick={handleLoadMore}>Load More</button>
          :
          <p style={{marginBottom: "20px"}}> No More Movies To Load</p>
        }
      </main>
    </div>
  )
}

export default App
