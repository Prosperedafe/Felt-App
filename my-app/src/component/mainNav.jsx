import React from "react";
import logo from "../images/Subtract.svg"; 
// import Style from "../App.css";
import Style from "../style/navbar.css";
// import JoinUs from "./join";
// import Signup from "./signup";
// import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <header>
    <nav className="main__nav">
      <div className="felt__logo">
        <img src={logo} alt="felt logo" /> 
        <span>Felt Techers</span>
      </div>
      <ul className="nav__links"
       style={{
        left: isActive ? "0" : "-100%",
      }}
      >
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">FAQ(s)</a></li>
        <li className="sign-up-btn"><a href="/">JOIN US</a></li>
      </ul>
      <div className="hamburger"
      onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </header>
  );
};
export default NavBar;
