import React from "react";
import "./FollowMe.css";
import followme from "../../../images/follow-me/follow.png";
import followme1 from "../../../images/follow-me/follow1.png";
import followme2 from "../../../images/follow-me/follow2.png";
import followme3 from "../../../images/follow-me/follow3.png";
import followme4 from "../../../images/follow-me/follow4.png";

const FollowMe = () => {
  return (
    <div className="container-fluid follow-me">
      <h2 className="text-center">FOLLOW ME @Jobayer_AK</h2>
      <div className="follow-me-images d-flex container">
        <img src={followme} alt="" />
        <img src={followme1} alt="" />
        <img src={followme2} alt="" />
        <img src={followme3} alt="" />
        <img src={followme4} alt="" />
      </div>
    </div>
  );
};

export default FollowMe;
