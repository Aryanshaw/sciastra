/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./CentralImg.css";
import { Image } from "react-bootstrap";

const CentralImg = () => {
  return (
    <div className="image-container">
      <img
        className="centralImg"
        src={require("../../assets/University.jpg")}
        alt=""
      />
      <div className="text-overlay">
        Learn from the scientists <br />
        Resarch Scholars from
        <br />
        top institues of the world
      </div>
    </div>
  );
};

export default CentralImg;
