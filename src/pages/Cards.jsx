import React from "react";


function Cards({ movieObj,handlewatchlist }) {
  const{poster_path,title,name}=movieObj
  return (
    <div className="container">
      <div className="card">
         <div onClick={() => handlewatchlist(movieObj)} className="emoji-badge"> &#128525;</div>
        <div className="image-wrapper">
          <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="img" />
          <div className="overlay-text">{title || name}</div>
        </div>
      </div>
    </div>
  );
}


export default Cards;
