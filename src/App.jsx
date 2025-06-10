import { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'

const App = () => {
  
  const [movieData, setMovieData] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)
  const [dataType, setDataType] = useState("now-playing")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortType, setSortType] = useState("")

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json();
      if (movieData.length === 0) {
        setNumPages(data.total_pages)
      }
      setMovieData([...movieData, ...data.results])
    } catch (error) {
      console.error(error)
    }
  }

  const fetchSearchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${searchQuery}`)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json();
      if (movieData.length === 0) {
        setNumPages(data.total_pages)
      }
      setMovieData([...movieData, ...data.results])
    } catch (error) {
      console.error(error)
    }
  }

  const handleDataChange = (newType, searchTerm) => {
    if (newType !== dataType || searchTerm !== searchQuery) {
      setDataType(newType)
      setSearchQuery(searchTerm)
      setMovieData([])
      setNumPages(1)
      setPage(1)
    }
  }

  const handleSortChange = (newSortType) => {
    setSortType(newSortType)
  } 

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (dataType === "now-playing") {
      fetchData()
    } else if (dataType === "search-movies") {
      fetchSearchData()
    }
  }, [page, dataType, searchQuery])

  return (
    <div className="App">
      <header id="header-container">
        <h1 id="title">🎬 Flixster</h1>
        <SearchForm id 
          handleDataChange={handleDataChange} sortData={handleSortChange}
        />
      </header>
      <main id="main-container">
        <MovieList movieData={movieData} sortType={sortType}/>
        {
          page <= numPages  && movieData.length !== 0 ? 
          <button style={{marginBottom: "20px"}} onClick={handleLoadMore}>Load More</button>
          :
          <p style={{marginBottom: "20px"}}> No More Movies To Load</p>
        }
      </main>
      <footer id='footer'>
        <p id="copy-write">@James-Featherston</p>
      </footer>
    </div>
  )
}

export default App
