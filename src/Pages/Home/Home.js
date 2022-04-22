import React from "react";
import "./Home.css";
import bannerImage from "../../images/banner/banner.png";

const Home = () => {
  return (
    <div className="container">
      <div className="banner d-flex">
        <img src={bannerImage} className="banner-img me-4" alt="Banner Image" />
        <div className="about-me ms-3 px-3">
          <h2 className="text-center about-header">About Me</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            rerum numquam, impedit esse repellendus recusandae maiores beatae
            magnam aspernatur modi? Nihil minus numquam, molestiae autem non in
            recusandae eligendi nam vitae atque
          </p>
          <div className="text-center">
            <button className="btn btn-dark btn-lg mt-4">Let's Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
