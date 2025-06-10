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
    event.preventDefault();
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
      <select>
        <option value="">Sort By</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  )
}

export default SearchForm