import React from "react";
import "./Sidebar.css";
import { movieDisplayTypes } from "../utils/utils";

const Sidebar = (props) => {
  /* Changes the display type to now playing and close the sidebar*/
  const handleHomeBtn = () => {
    props.handleDataChange(movieDisplayTypes.nowPlaying, "");
    props.setSidebarState(false);
  };

  /* Changes the display type to favorites and closes the sidebar */
  const handleFavoritesBtn = () => {
    props.handleDataChange(movieDisplayTypes.favorites, "");
    props.setSidebarState(false);
  };
  /* Changes the display type to watched and closes the sidebar */
  const handleWatchedBtn = () => {
    props.handleDataChange(movieDisplayTypes.watched, "");
    props.setSidebarState(false);
  };

  /* Closes the sidebar */
  const handleCloseBtn = () => {
    props.setSidebarState(false);
  };

  return (
    <>
      {props.sidebarState ? (
        <article className="sidebar-container">
          <button onClick={handleHomeBtn} className="sidebar-button">
            Home
          </button>
          <button onClick={handleFavoritesBtn} className="sidebar-button">
            Favorites
          </button>
          <button onClick={handleWatchedBtn} className="sidebar-button">
            Watched
          </button>
          <button onClick={handleCloseBtn} className="sidebar-button">
            Close
          </button>
          <div className="spacer" />
        </article>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
