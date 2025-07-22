import React from "react";

function Cards({ poster_path,name }) {
  return (
    <div className="container">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="img"/>
         {name}
      </div>

    </div>
  );
}

export default Cards;
