import React from "react";

function Cards({ movieObj, handlewatchlist, removefromwatchlit, List }) {
  const { poster_path, title, name } = movieObj;

  function doesContain(movieObj) {
    if (!Array.isArray(List)) return false;
    return List.some((item) => item.id === movieObj.id);
  }

  return (
    <div className="container">
      <div className="card">
{doesContain(movieObj) ? (
  <div
    onClick={() => removefromwatchlit(movieObj.id)}
    className="emoji-badge"
  >
    &#10060;
  </div>
) : (
  <div
    onClick={() => handlewatchlist(movieObj)}
    className="emoji-badge"
  >
    &#128525;
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