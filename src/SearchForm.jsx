import React, {useState} from 'react'
import './SearchForm.css'

const SearchForm = (props) => {
  const [query, setQuery] = useState("")

  const handleSearchChange = (event) => {
    setQuery(event.target.value)
  }
  const onSearch = (event) => {
    event.preventDefault();
    props.handleDataChange("search-movies", query)
    console.log(query)
  }
  const onSort = (event) => {
    props.sortData(event.target.value)
  }
  const handleNowPlaying = (event) => {
    setQuery("")
    props.handleDataChange("now-playing", "")
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
        <option value="alphabetic">Alphabetic</option>
        <option value="chronological">Chronologically</option>
        <option value="vote-average">Vote Average</option>
      </select>
    </div>
  )
}

export default SearchForm