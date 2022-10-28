import "./account.css";
import NavBar from "../navigation/mainNav";
import { Link } from "react-router-dom";
import HomeBtn from "../navigation/home-btn";

const SchoolLogin = () => {
  return (
    <>
      <NavBar />
      <section className="login-page">
        <HomeBtn />
        <div className="login-container">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email" required /> <br />
            <input type="Password" placeholder="Password" required /> <br />
            <button>Log in</button>
            <Link className="pass-reset" to="/">
              Forgot password?
            </Link>
            <p>
              Don't have an account? <a hfef="/">Sign Up</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SchoolLogin;
