import React from "react";
import Style from "../style/account.css";
import { Link } from "react-router-dom";
import NavBar from "./mainNav";

const ParentSignup = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container1">
        <section className="sign-section">
          <h1>Sign Up as Parent</h1>
          <form>
            <input type="text" placeholder="School Name" required /> <br />
            <input type="email" placeholder="E-mail Adress" required /> <br />
            <input type="tel" placeholder="Phone no." required /> <br />
            <input type="password" placeholder="Password" required /> <br />
            <input type="password" placeholder="Confirm Password" required />
            <br />
            <input
              className="passcode-field"
              type="password"
              placeholder="Passcode"
              required
            />
            <br />
            <span>Click to get passcode</span>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/parent">Login</Link>
          </p>
        </section>
      </div>
    </>
  );
};

export default ParentSignup;
