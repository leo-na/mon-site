import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HommePage from "./HommePage"; 
import HomePage from "./HomePage";
import Baniere from "./components/Baniere";
import ImageScroller from "./components/ImageScroller";

function App() {
  return (
    <div className="App">
      <Router>
      

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homme" element={<HommePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
