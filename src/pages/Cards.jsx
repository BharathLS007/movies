import React from "react";

function Cards({ movieObj, handlewatchlist, removefromwatchlit, WatchList }) {
  const { poster_path, title, name } = movieObj;

  function doesContain(movieObj) {
    for (let i = 0; i < WatchList.length; i++) {
      return true;
    }
    return false;
  }

  return (
    <div className="container">
      <div className="card">
        {doesContain(movieObj) ? (
          <div onClick={() => removefromwatchlit(movieObj)}className="emoji-badge">&#10060;</div>
        ) : (
          <div onClick={() => handlewatchlist(movieObj)}className="emoji-badge">&#128525;
          </div>
        )}

        <div className="image-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="img"
          />
          <div className="overlay-text">{title || name}</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
