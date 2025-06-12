import React, { useState } from "react";
import "./SearchForm.css";
import { movieDisplayTypes, movieSortTypes } from "../utils/utils";

const SearchForm = (props) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  /* Changes the display type to search with the search query */
  const onSearch = (event) => {
    event.preventDefault();
    props.handleDataChange(movieDisplayTypes.searchMovies, query);
  };
  /* Changes the sort type */
  const onSort = (event) => {
    props.sortData(Number(event.target.value));
  };
  /* Changes the display type*/
  const changeToNowPlaying = (event) => {
    setQuery("");
    props.handleDataChange(movieDisplayTypes.nowPlaying, "");
  };

  /* Opens the sidebar */
  const handleSidebar = () => {
    props.setSidebarState(!props.sidebarState);
  };

  return (
    <section className="form-container">
      <div className="form-buttons">
        <form onSubmit={onSearch}>
          <input
            className="form-field"
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search Movies"
          />
          <button className="form-field" type="submit">
            Search
          </button>
        </form>
        <button className="form-field" onClick={changeToNowPlaying}>
          Clear
        </button>
      </div>
      <button className="form-btn" onClick={changeToNowPlaying}>
        Now Playing
      </button>
      <select className="form-btn" onChange={onSort}>
        <option value="">Sort By</option>
        <option value={movieSortTypes.alphabetic}>Alphabetic</option>
        <option value={movieSortTypes.chronological}>Chronologically</option>
        <option value={movieSortTypes.voteAverage}>Vote Average</option>
      </select>
      <button className="form-btn" onClick={handleSidebar}>
        Open Sidebar
      </button>
    </section>
  );
};

export default SearchForm;
