import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WatchList" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
