import logo from "../../images/Subtract.svg"; 
import "./navbar.css";
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
          <Link to="/home">Home</Link>
          </li>
        <li>
          <Link to="/">About Us</Link>
          </li>
        <li>
          <Link to="/faq(s)">FAQ(s)</Link>
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
export default NavBar;
