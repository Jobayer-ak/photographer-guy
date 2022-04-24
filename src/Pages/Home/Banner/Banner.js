import React from "react";
import "./Banner.css";
import bannerImage from "../../../images/banner/banner.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <img
          src={bannerImage}
          className="banner-img me-4 img-fluid"
          alt="Banner Image"
        />

        <div className="about-me ms-sm-0 ms-lg-3 ms-md-0 px-3">
          <h2 className="text-center about-header">About Me</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            rerum numquam, impedit esse repellendus recusandae maiores beatae
            magnam aspernatur modi? Nihil minus numquam, molestiae autem non in
            recusandae eligendi nam vitae atque
          </p>
          <div className="text-center mb-sm-2 mb-2">
            <button className="btn btn-dark btn-lg mt-4 mb-sm-4 mb-md-4">
              Let's Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
