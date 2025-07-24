import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import WatchList from "./pages/WatchList";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  let [List, setList] = useState([])

  let handlewatchlist = (movieObj) => {
    let newList = [...List, movieObj]
    setList(newList)
    console.log(newList)
  }

  let removefromwatchlit = (movieid) => {
    let updatedlist = List.filter(movie => movie.id !== movieid);
    setList(updatedlist);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home handlewatchlist={handlewatchlist} removefromwatchlit={removefromwatchlit} List={List} />} />
        <Route path="/WatchList" element={<WatchList List={List} removefromwatchlit={removefromwatchlit} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//      first  API KEY
// https://api.themoviedb.org/3/trending/movie/day?api_key=33ff229658ca96598dadc46544c1e142&language=en


// tv api second one
//https://api.themoviedb.org/3/discover/tv?api_key=ffbc70b1b2dd54b62933e5b8953c56a7&language=en
