import React from "react";
import "./ImageScroller.css";
import Carte1 from "./Images/Carte2.jpg";
import Carte2 from "./Images/Carte3.jpg";
import Carte3 from "./Images/Carte4.jpg";
import Carte4 from "./Images/Carte5.jpg";

const ImageScroller = () => {
  return (
    <div className="image-scroller-container">
      <h2 className="scroller-title">Nos Collections Populaires</h2>
      <div className="image-scroller">
        <a href="/acheter/collection1" className="image-link">
          <img src={Carte1} alt="" className="scroller-image" />
          <h3 className="image-subtitle">Collection 1</h3>
        </a>
        <a href="/acheter/collection2" className="image-link">
          <img src={Carte2} alt="" className="scroller-image" />
          <h3 className="image-subtitle">Collection 2</h3>
        </a>
        <a href="/acheter/collection3" className="image-link">
          <img src={Carte3} alt="" className="scroller-image" />
          <h3 className="image-subtitle">Collection 3</h3>
        </a>
        <a href="/acheter/collection4" className="image-link">
          <img src={Carte4} alt="" className="scroller-image" />
          <h3 className="image-subtitle">Collection 4</h3>
        </a>
      </div>
    </div>
  );
};

export default ImageScroller;
