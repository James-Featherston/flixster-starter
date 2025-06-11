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
  const handleNowPlaying = (event) => {
    setQuery("")
    props.handleDataChange(movieDisplayTypes.nowPlaying, "")
  }

  return (
    <div id="form-container">
      <form onSubmit={onSearch}>
        <input type="text" value={query} onChange={handleSearchChange} placeholder='Search Movies'/>
        <button type="submit">Search</button>
      </form> 
      <button onClick={handleNowPlaying}>Now Playling</button>
      <select onChange={onSort}>
        <option value="">Sort By</option>
        <option value={movieSortTypes.alphabetic}>Alphabetic</option>
        <option value={movieSortTypes.chronological}>Chronologically</option>
        <option value={movieSortTypes.voteAverage}>Vote Average</option>
      </select>
    </div>
  )
}

export default SearchForm