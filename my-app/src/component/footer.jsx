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
          <a href="https://github.com/Prosperedafe" target="_blank" ><img src={github} /></a>
          <a href="https://www.linkedin.com/in/edafe-prosper-b046ba239/" target="_blank" ><img src={linkedin} /></a>
          <a href="https://www.instagram.com/mamusedafe19/" target="_blank" ><img src={instagram} /></a>
          <a href="https://www.facebook.com/prosper.edafe.10" target="_blank" > <img src={facebook} /></a>
          <a href="https://twitter.com/ProsperEdafe?t=wcoZQFJM82zEka_bqiTWig&s=09" target="_blank" > <img src={twitter} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
