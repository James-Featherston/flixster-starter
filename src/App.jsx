import { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import { fetchNowPlayingData, fetchSearchData } from './utils/services'
import { movieSortTypes, movieDisplayTypes } from './utils/utils'

const App = () => {
  const [movieData, setMovieData] = useState([])
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(1)
  const [movieDisplayType, setMovieDisplayType] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortType, setSortType] = useState(0)
  const [sidebarState, setSidebarState] = useState(false)

  const getMoreNowPlaying = async () => {
    const nextMovies = await fetchNowPlayingData(page)
    if (movieData.length === 0) {
        setNumPages(nextMovies.total_pages)
    }
    setMovieData([...movieData, ...nextMovies.results])
  }

  const getSearchResults = async () => {
    const nextMovies = await fetchSearchData(page, searchQuery)
    if (movieData.length === 0) {
        setNumPages(nextMovies.total_pages)
    }
    setMovieData([...movieData, ...nextMovies.results])
  }

  const handleDataChange = (newType, searchTerm) => {
    if (newType !== movieDisplayType || searchTerm !== searchQuery) {
      setMovieDisplayType(newType)
      setSearchQuery(searchTerm)
      // setMovieData([])
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
    if (movieDisplayType === movieDisplayTypes.nowPlaying) {
      getMoreNowPlaying()
    } else if (movieDisplayType === movieDisplayTypes.searchMovies) {
      getSearchResults()
    }
    console.log("looping")
  }, [movieDisplayType])

  return (
    <div className="App">
      <header id="header-container">
        <h1 id="title">🎬 Flixster</h1>
        <SearchForm
          handleDataChange={handleDataChange} sortData={handleSortChange}
          setSidebarState={setSidebarState} sidebarState={sidebarState}
        />
      </header>
      <section id="banner">
        <p>Welcome to Flixster</p>
      </section>
      <main id="main-container">
        <MovieList 
          movieData={movieData} sortType={sortType}
          setSidebarState={setSidebarState} sidebarState={sidebarState}
          movieDisplayType={movieDisplayType}
          handleDataChange={handleDataChange}
        />
        {
          page < numPages  && movieData.length !== 0 ? 
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
