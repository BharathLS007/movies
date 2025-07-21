import React, { useEffect } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import axios from "axios";

function Home() {
 
useEffect(() => {
  axios
    .get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=33ff229658ca96598dadc46544c1e142&language=en'
    )
    .then(function (res) {
      console.log(res.data); // Only logs the actual genre data
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
