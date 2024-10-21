import React from "react";
import Header from "./components/Header";
import Baniere from "./components/Baniere";
import ImageScroller from "./components/ImageScroller";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Baniere />
      <ImageScroller />
    </div>
  );
};

export default HomePage;
