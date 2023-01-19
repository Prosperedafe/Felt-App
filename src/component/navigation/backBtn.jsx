import "./nav-btn.css";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <Link className="home-btn" to="/">
      Back
    </Link>
  );
};

export default Back;
