import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import axios from "axios";
import Pagehandle from "./Pagehandle";

function Home({handlewatchlist,removefromwatchlit,WatchList}) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=ffbc70b1b2dd54b62933e5b8953c56a7&language=en&page=${page}`
      )
      .then((res) => {
        setMovie(res.data.results);
        //console.log(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching Movies:", error.message);
      });
  }, [page]);

  return (
    <div>
      <Banner />
      <h1 className="Trend">Trending Movies</h1>

      <div className="moviecontainer">
        {movie.map((movieObj) => (
          <Cards
           key={movieObj.id}
           movieObj={movieObj} 
           handlewatchlist={handlewatchlist} // if we want to use another api and want to display the title inside the card dont forgot to rename the title to the anyname use console.log  in line 27
          />
        ))}
      </div>

      <Pagehandle
        page={page}setPage={setPage}handlePrev={handlePrev}handleNext={handleNext} handlewatchlist={handlewatchlist} removefromwatchlit={removefromwatchlit} WatchList={WatchList}
      />
    </div>
  );
}

export default Home;

// second api credit      ffbc70b1b2dd54b62933e5b8953c56a7

//original_name
