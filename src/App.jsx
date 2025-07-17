import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import WatchList from "./pages/WatchList";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WatchList" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
