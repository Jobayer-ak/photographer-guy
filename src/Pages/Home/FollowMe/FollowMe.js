import React from "react";
import "./FollowMe.css";
import followme from "../../../images/follow-me/follow.png";
import followme1 from "../../../images/follow-me/follow1.png";
import followme2 from "../../../images/follow-me/follow2.png";
import followme3 from "../../../images/follow-me/follow3.png";
import followme4 from "../../../images/follow-me/follow4.png";

const FollowMe = () => {
  return (
    <div id="followme" className="container-fluid follow-me-container">
      <div className="container">
        <h2 className="text-center">
          FOLLOW ME{" "}
          <a
            href="http://www.twitter.com"
            className="text-decoration-none"
            target="_blank">
            @Jobayer_AK
          </a>
        </h2>
        <div className="follow-me-images d-md-grid d-lg-flex container pb-md-3 pb-lg-0">
          <img src={followme} alt="" />
          <img src={followme1} alt="" />
          <img src={followme2} alt="" />
          <img src={followme3} alt="" />
          <img className="d-md-none d-lg-block" src={followme4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
