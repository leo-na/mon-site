import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HommePage from "./HommePage"; // Correction du chemin d'import
import HomePage from "./HomePage";
import Baniere from "./components/Baniere";
import ImageScroller from "./components/ImageScroller";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Le Router doit englober tous les composants liés à la navigation */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homme" element={<HommePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
