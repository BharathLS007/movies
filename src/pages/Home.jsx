import React, { useEffect } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import axios from "axios";

function Home() {
 
useEffect(() => {
  axios
    .get(
      'https://api.themoviedb.org/3/discover/tv?api_key=ffbc70b1b2dd54b62933e5b8953c56a7&language=en'
    )
    .then(function (res) {
      console.log(res.data.results); // Only logs the actual genre data
    })
    .catch(function (error) {
      console.error('Error fetching genres:', error.message); // Cleaner error message
    });
}, []);



  return (
    <div>
      
      <Banner />
      <h1 className="Trend">Trending Movie</h1>

      <div className="moviecontainer">
        <Cards />

      </div>
    </div>
  );
}

export default Home;


// second api credit      ffbc70b1b2dd54b62933e5b8953c56a7