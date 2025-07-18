import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";

function Home() {
  return (
    <div>
      <Banner />
      <h1 className="Trend">Trending Movie</h1>
      <div className="moviecards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
  
      </div>
    </div>
  );
}

export default Home;
