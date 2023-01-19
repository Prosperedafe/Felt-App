import "./nav-btn.css";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <Link className="home-btn" to="/">
      Back to Home
    </Link>
  );
};

export default HomeBtn;
