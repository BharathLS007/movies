import React from "react";

function Cards({ poster_path }) {
  return (
    <div className="container">
      <div className="card">
        <img 
          src={`https://image.tmdb.org/t/p/original/${poster_path}`} 
          alt="img" 
        />
      </div>
    </div>
  );
}

export default Cards;
