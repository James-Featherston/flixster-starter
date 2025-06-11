import React, {useState} from 'react'
import './SearchForm.css'
import { movieDisplayTypes, movieSortTypes } from '../utils/utils'

const SearchForm = (props) => {
  const [query, setQuery] = useState("")

  const handleSearchChange = (event) => {
    setQuery(event.target.value)
  }
  const onSearch = (event) => {
    event.preventDefault();
    props.handleDataChange(movieDisplayTypes.searchMovies, query)
  }
  const onSort = (event) => {
    props.sortData(Number(event.target.value))
  }
  const changeToNowPlaying = (event) => {
    setQuery("")
    props.handleDataChange(movieDisplayTypes.nowPlaying, "")
  }

  const handleSidebar = () => {
    props.setSidebarState(!props.sidebarState)
  }

  return (
    <section id="form-container">
      <div id="form-buttons">
        <form onSubmit={onSearch}>
          <input className="form-field" type="text" value={query} onChange={handleSearchChange} placeholder='Search Movies'/>
          <button className="form-field" type="submit">Search</button>
        </form> 
        <button className="form-field" onClick={changeToNowPlaying}>Clear</button>
      </div>
      <button onClick={changeToNowPlaying}>Now Playing</button>
      <select onChange={onSort}>
        <option value="">Sort By</option>
        <option value={movieSortTypes.alphabetic}>Alphabetic</option>
        <option value={movieSortTypes.chronological}>Chronologically</option>
        <option value={movieSortTypes.voteAverage}>Vote Average</option>
      </select>
      <button onClick={handleSidebar}>Open Sidebar</button>
    </section>
  )
}

export default SearchForm