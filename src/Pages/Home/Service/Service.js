import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import service1 from "../../../images/service/service-1.png";
import service2 from "../../../images/service/service-2.png";
import service3 from "../../../images/service/service-3.png";
import "./Service.css";

const Service = () => {
  return (
    <div className="container d-flex service">
      {/* <h2 className="text-center text-white">This is Service</h2> */}
      <div className="service-1">
        <img src={service1} alt="" />
        <h4 className="text-white text-center">Wedding Photography</h4>
      </div>
      <div className="service-2">
        <img src={service2} alt="" />
        <h4 className="text-white text-center">Event Photography</h4>
      </div>
      <div className="service-3">
        <img src={service3} alt="" />
        <h4 className="text-white text-center">Birthday Photography</h4>
      </div>
    </div>
  );
};

export default Service;
