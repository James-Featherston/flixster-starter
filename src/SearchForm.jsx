import React from 'react'
import './SearchForm.css'

const SearchForm = () => {
  const onSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchInput.value
    console.log(searchTerm)
  }
  const onSort = (event) => {
    event.preventDefault();
    console.log("do sort")
  }
  return (
    <div id="form-container">
      <form onSubmit={onSearch}>
        <input type="text" name="searchInput" placeholder='Search Movies'/>
        <button type="submit">Search</button>
      </form> 
      <select>
        <option value="">Sort By</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  )
}

export default SearchForm