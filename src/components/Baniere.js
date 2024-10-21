import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Baniere.css";
import img from "./Images/C.jpg";
import img2 from "./Images/C2.jpg";
import img3 from "./Images/C3.jpg";
import img4 from "./Images/C4.jpg";
import img5 from "./Images/C5.jpg";

const CarouselContainer = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={2000}
        transitionTime={1000}
      >
        <div className="carousel-slide">
          <img src={img} alt="Slide 1" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={img2} alt="Slide 2" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={img3} alt="Slide 3" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={img4} alt="Slide 4" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={img5} alt="Slide 5" className="carousel-image" />
        </div>
      </Carousel>

      <div className="carousel-overlay">
        <h1>Bienvenue sur Notre Site</h1>
        <p>Découvrez nos dernières collections et offres exclusives.</p>
        <button className="cta-button">Voir Plus</button>
      </div>
    </div>
  );
};

export default CarouselContainer;
