import React from "react";


function Cards({ poster_path, name }) {
  return (
    <div className="container">
      <div className="card">
         <div className="emoji-badge"> &#128525;</div>
        <div className="image-wrapper">
          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="img" />
          <div className="overlay-text">{name}</div>
        </div>
      </div>
    </div>
  );
}


export default Cards;
