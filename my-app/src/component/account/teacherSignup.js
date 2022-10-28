import "./account.css";
import { Link } from "react-router-dom";
import NavBar from "../navigation/mainNav";
import axios from "axios";

const TeacherSignup = () => {
 
  return (
      <>
        <header>
          <NavBar />
        </header>
        <div className="container1">
          <section className="sign-section">
            <h1>Sign Up as Teacher</h1>
            <form>
              <input
                type="text"
                placeholder="Name"
                required
                name="nameOfTeacher"
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
              Already have an account? <Link to="/teacher">Login</Link>
            </p>
          </section>
        </div>
      </>
    );
  }


export default TeacherSignup;
