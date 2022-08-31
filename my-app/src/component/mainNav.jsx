import React from "react";
import logo from "../images/Subtract.svg"; 
import Style from "../style/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <header className="main-header">
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
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>
          <Link to="/">About Us</Link>
          </li>
        <li>
          <Link to="/">FAQ(s)</Link>
          </li>
        <li>
          <Link to="/welcome">LOGIN</Link>
          </li>
        <li className="sign-btn">
          <Link to="/join">SIGN UP</Link>
          </li>
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
