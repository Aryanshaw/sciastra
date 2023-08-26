import React from "react";
import "./Home.css";
import NavbarComponent from "../Navbar/Navbar";
import CentralImg from "../CentralImage/CentralImg";
import Universities from "../Universities/Universities";
import Mentors from "../Mentors/Mentors";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <CentralImg />
      <div style={{ marginTop: "50px" }}></div>
      <Universities />
      <div style={{ marginTop: "50px" }}></div>
      <h1 style={{ textAlign: "center", fontStyle: "italic" }}>
        Meet your mentor
      </h1>
      <div style={{ marginTop: "50px" }}></div>
      <Mentors />
      <Footer />
    </div>
  );
};

export default Home;
