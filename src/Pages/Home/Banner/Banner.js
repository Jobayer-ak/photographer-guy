import React from "react";
import "./Banner.css";
import bannerImage from "../../../images/banner/banner.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  //  hooks
  const navigate = useNavigate();

  // handle lets chat button
  const handleLetsChat = () => {
    navigate("/contact");
  };
  return (
    <div className="container">
      <div className="banner">
        <img
          src={bannerImage}
          className="banner-img me-4 img-fluid"
          alt="Banner Image"
        />

        <div className="about-me ms-sm-0 ms-lg-3 ms-md-0 px-3">
          <h2 className="text-center about-header">
            I AM HERE <br /> TO BE YOUR <br /> PHOTOGRAPHAR
          </h2>
          <p className="lead">
            I am a professional photographar. I have been working in this
            profession for 10 years. Photography is my passion. So, I am ready
            to serve you!
          </p>
          <div className="text-center mb-sm-2 mb-2">
            <button
              onClick={handleLetsChat}
              className="btn btn-dark btn-lg mt-4 mb-sm-4 mb-md-4">
              Let's Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
