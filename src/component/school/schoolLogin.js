import "../account/account.css";
import { Link } from "react-router-dom";
import HomeBtn from "../navigation/home-btn";

const SchoolLogin = () => {
  return (
    <>
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
              Don't have an account? <Link to="/schools">Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SchoolLogin;
