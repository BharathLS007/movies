import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import WatchList from "./pages/WatchList";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [watchListData, setWatchListData] = useState([]);
  const handlewatchlist = (movieObj) => {
    const newWatchList = [...watchListData, movieObj];
    setWatchListData(newWatchList);
    console.log(newWatchList);
  };

  const removefromwatchlit = (movieId) => {
    const updatedList = watchListData.filter((movie) => movie.id !== movieId);
    setWatchListData(updatedList);
    console.log(updatedList);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handlewatchlist={handlewatchlist}
              removefromwatchlit={removefromwatchlit}
              WatchList={watchListData}
            />
          }
        />
        <Route
          path="/WatchList"
          element={<WatchList WatchList={watchListData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//      first  API KEY
// https://api.themoviedb.org/3/trending/movie/day?api_key=33ff229658ca96598dadc46544c1e142&language=en

// tv api second one
//https://api.themoviedb.org/3/discover/tv?api_key=ffbc70b1b2dd54b62933e5b8953c56a7&language=en
