import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container footer d-flex justify-content-evenly">
      <a className="text-decoration-none text-white" href="#">
        Services
      </a>
      <a className="text-decoration-none text-white" href="#">
        Contact
      </a>
      <div className="social-icons">
        <a href="http://www.facebook.com">
          <FontAwesomeIcon className="text-white fs-4" icon={faFacebookF} />
        </a>
        <a href="http://www.twitter.com">
          <FontAwesomeIcon className="text-white fs-4" icon={faTwitter} />
        </a>
        <a href="http://www.instagram.com">
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
