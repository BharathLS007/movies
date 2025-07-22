import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import axios from "axios";

function Home() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=ffbc70b1b2dd54b62933e5b8953c56a7&language=en&page=3"
      )
      .then(function (res) {
        setmovie(res.data.results); // Only logs the actual genre data
      })
      .catch(function (error) {
        console.error("Error fetching genres:", error.message); // Cleaner error message
      });
  }, []);

  return (
    <div>
      <Banner />
      <h1 className="Trend">Trending Movie</h1>

      <div className="moviecontainer">
        {movie.map((movieObj) => {
          return <Cards poster_path={movieObj.poster_path} name={movieObj.original_name}/>;
        })}
      </div>
    </div>
  );
}

export default Home;

// second api credit      ffbc70b1b2dd54b62933e5b8953c56a7


//original_name