import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";

function Home() {
  return (
    <div>
      <Banner />
      <h1 className="Trend">Trending Movie</h1>
      <div className="moviecards d-flex align-items-end justify-content-center border">
        <Cards />
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
