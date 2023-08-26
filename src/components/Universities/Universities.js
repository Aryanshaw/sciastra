import React, { useState } from "react";
import { universities } from "../../Api/universityapi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Universities.css";

const Universities = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3, // Show three slides initially
    slidesToScroll: 1,
    initialSlide: 0, // Start at the first slide
    autoplay: true, // Enable auto slide
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {universities.map((university) => (
          <div key={university.id}>
            <div className="universityContainer">
              <img src={university.logo} alt={university.name} />
              <h2>{university.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Universities;
