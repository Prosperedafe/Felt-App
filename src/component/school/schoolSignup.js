import "../account/account.css";
import { Link } from "react-router-dom";
import NavBar from "../navigation/navbar";

const SchoolSignup = () => {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container1">
        <section className="sign-section">
          <h1>Sign Up as School</h1>
          <form>
            <input
              type="text"
              placeholder="School Name"
              required
              name="nameOfSchool"

            />{" "}
            <br />
            <input
              type="email"
              placeholder="E-mail Adress"
              required
              name="email"
            />{" "}
            <br />
            <input
              type="tel"
              placeholder="Phone no."
              required
              name="phone"
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="password"
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/school">Login</Link>
          </p>
        </section>
      </div>
    </>
  );
}

export default SchoolSignup;
