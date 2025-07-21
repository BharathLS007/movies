import React, { useEffect } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import axios from "axios";

function Home() {
  return (
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('https://api.example.com/data'); // replace with your real API
      console.log(res.data); // access the actual data from response
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

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
