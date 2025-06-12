import React from "react";
import "./Sidebar.css";
import { movieDisplayTypes } from "../utils/utils";

const Sidebar = (props) => {
  const handleHomeBtn = () => {
    props.handleDataChange(movieDisplayTypes.nowPlaying, "");
    props.setSidebarState(false);
  };

  const handleFavoritesBtn = () => {
    props.handleDataChange(movieDisplayTypes.favorites, "");
    props.setSidebarState(false);
  };

  const handleWatchedBtn = () => {
    props.handleDataChange(movieDisplayTypes.watched, "");
    props.setSidebarState(false);
  };

  const handleCloseBtn = () => {
    props.setSidebarState(false);
  };

  return (
    <>
      {props.sidebarState ? (
        <article id="sidebar-container">
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
