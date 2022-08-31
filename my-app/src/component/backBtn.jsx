import React from "react";
import Style from "../style/nav-btn.css";
import { Link } from "react-router-dom";

const Back = () => {
  return <Link className="home-btn" to="/home">Back</Link>;
};

export default Back;