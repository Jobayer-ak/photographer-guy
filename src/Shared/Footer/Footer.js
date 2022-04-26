import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // hooks
  const navigate = useNavigate();

  // handle toService button
  const handleToService = () => {
    navigate("/home");
  };

  // handle toContact button
  const handleToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="container footer d-flex justify-content-evenly">
      <a
        onClick={handleToService}
        className="text-decoration-none text-white d-none d-md-block d-lg-block"
        href="/home#services">
        Services
      </a>
      <a
        onClick={handleToContact}
        className="text-decoration-none text-white d-none d-md-block d-lg-block"
        href="#">
        Contact
      </a>
      <div className="social-icons">
        <a href="http://www.facebook.com" target="_blank">
          <FontAwesomeIcon className="text-white fs-4" icon={faFacebookF} />
        </a>
        <a href="http://www.twitter.com" target="_blanck">
          <FontAwesomeIcon className="text-white fs-4" icon={faTwitter} />
        </a>
        <a href="http://www.instagram.com" target="_blank">
          <FontAwesomeIcon
            className="text-white fs-4 insta"
            icon={faInstagram}
          />
        </a>
      </div>
      <p className="text-uppercase text-white">
        copyright &copy;2022 | jobayer
      </p>
    </div>
  );
};

export default Footer;
