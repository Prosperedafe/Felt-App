import React from "react";
import Style from "../style/nav-btn.css";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return <Link className="home-btn" to="/home">Back to Home</Link>;
};

export default HomeBtn;
