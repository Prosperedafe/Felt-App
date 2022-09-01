import React from "react";
import Style from "../style/account.css";
import AppNav from "./defNav";
import { Link } from "react-router-dom";
import HomeBtn from "./home-btn";

const ParentLogin = () => {
  return (
    <>
      <AppNav />
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
              Don't have an account? <Link to="/parents">Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default ParentLogin;
