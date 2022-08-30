import React from "react";
import logo from "../images/Subtract.svg";
import github from "../images/icons8-github.svg";
import linkedin from "../images/icons8-linkedin-circled.svg";
import instagram from "../images/icons8-instagram.svg";
import facebook from "../images/icons8-facebook.svg";
import twitter from "../images/icons8-twitter.svg";
import Style from "../style/navbar.css";
import Link from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} />
        <span>Felt Teachers</span>
      </div>
      <div className="footer__social-links">
        <p>Connect with us on social media</p>
        <div className="social-links-icons">
          <img src={github} />
          <img src={linkedin} />
          <img src={instagram} />
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
