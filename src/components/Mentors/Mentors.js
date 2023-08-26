import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Mentors.css";
import {mentors} from "../../Api/mentorsapi"

const Mentors = () => {
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
        {mentors.map((mentor) => (
          <div key={mentor.id}>
            <div className="mentorContainer">
              <img src={mentor.image} alt={mentor.name} />
              <h4>{mentor.name}</h4>
              <h5>{mentor.university}</h5>
              <div>
                <button>Message now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Mentors;
