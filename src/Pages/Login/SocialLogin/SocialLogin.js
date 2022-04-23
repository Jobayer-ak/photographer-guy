import React from "react";
import "./SocialLogin.css";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-light w-50"></div>
        <p className="text-white mt-2 px-3">Or</p>
        <div style={{ height: "1px" }} className="bg-light w-50"></div>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            style={{ width: "40px" }}
            className="img-fluid"
            src={google}
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            style={{ width: "40px" }}
            className="img-fluid"
            src={facebook}
            alt=""
          />
          <span className="px-2">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
