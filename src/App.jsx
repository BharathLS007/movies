import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import WatchList from "./pages/WatchList";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  let [WatchList, setwatchlist]=useState([])

  let handlewatchlist=(movieObj)=>{
     let newwatchlist = [...WatchList,movieObj]
     setwatchlist(newwatchlist)
     console.log(newwatchlist)
  }
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home handlewatchlist={handlewatchlist}/>} />
        <Route path="/WatchList" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;

//      first  API KEY
// https://api.themoviedb.org/3/trending/movie/day?api_key=33ff229658ca96598dadc46544c1e142&language=en


// tv api second one
//https://api.themoviedb.org/3/discover/tv?api_key=ffbc70b1b2dd54b62933e5b8953c56a7&language=en
