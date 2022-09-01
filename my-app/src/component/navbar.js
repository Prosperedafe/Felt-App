import React from "react";
import { useState } from "react";
import logo from "../images/Subtract.svg";
import { Link } from "react-router-dom";
import Style from "../style/testNav.css";

const Testnav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <header>
      <nav>
        <div className="felt-logo">
          <img src={logo} alt="Felt Logo" />
          <span>Felt Teachers</span>
        </div>
        <ul>
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
          <li>
            <Link to="/join">SIGNUP</Link>
          </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Testnav;
