import React from "react";
import logo from "../images/Subtract.svg"; 
import Style from "../style/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileNav = () => {

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
          <Link to="/home">Home</Link>
          </li>
        <li>
          <Link to="/">Schools</Link>
          </li>
        <li>
          <Link to="/faq(s)">Help</Link>
          </li>
        <li>
          <Link to="/welcome">
            <img alt="profile"/>
          </Link>
          </li>
      </ul>
      <div className="hamburger"
      onClick={handleClick}
      >
        <span
         style={{
          transform: isActive ? "rotate(45deg)" : "rotate(0)",
          position: isActive ? "absolute" : "none",
          top: isActive ? "0px" : "-8px",
        }}
        ></span>
        <span
         style={{
          transform: isActive ? "scale(0)" : "scale(1)",
        }}
        ></span>
        <span
         style={{
          transform: isActive ? "rotate(-45deg)" : "rotate(0)",
          position: isActive ? "absolute" : "none",
          top: isActive ? "0px" : "8px",
        }}
        ></span>
      </div>
    </nav>
    </header>
  );
};
export default ProfileNav;
