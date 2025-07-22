import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import axios from "axios";
import Pagehandle from "./Pagehandle";

function Home() {
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
            poster_path={movieObj.poster_path}
            name={movieObj.original_name || movieObj.name}
          />
        ))}
      </div>

      <Pagehandle
        page={page}setPage={setPage}handlePrev={handlePrev}handleNext={handleNext}
      />
    </div>
  );
}

export default Home;

// second api credit      ffbc70b1b2dd54b62933e5b8953c56a7

//original_name
