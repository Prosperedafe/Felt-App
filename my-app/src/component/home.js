import React from "react";
import NavBar from "./mainNav";
import Footer from "./footer";
import Style from "../style/home.css";
import Iphone1 from "../images/X-2.svg";
import Iphone2 from "../images/X-2.svg";
import Femaleworker from "../images/female-worker.svg";
import Maleworker from "../images/male-worker.svg";
import Intro1 from "../images/mobile-bg1.svg";
import Intro2 from "../images/mobile-bg2.svg";
import Intro3 from "../images/mobile-bg3.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="intro">
          <section className="intro1">
            <div className="flex1">
              <h1>Get access to the best teachers in town</h1>
              <p>
                Making refined and qualified Teachers to all schools in Nigeria
                is our Priority. Our Platform Creates a Link between teachers
                and Schools by providing a medium to vet teachers, and act as a
                means of communication to all parties
              </p>
              <button>SEE HOW IT WORKS</button>
            </div>
            <figure>
              <img src={Intro1} />
            </figure>
          </section>

          <section className="intro2">
            <div className="flex1">
              <h1>Get the best Quality tutor for your Kid's Home Lessons</h1>
              <p>
                Making refined and qualified Teachers to all schools in Nigeria
                is our Priority. Our Platform Creates a Link between teachers
                and Schools by providing a medium to vet teachers, and act as a
                means of communication to all parties
              </p>
            </div>
            <figure>
              <img src={Intro2} />
            </figure>
          </section>

          <section className="intro3">
            <div className="flex1">
              <h1>Support quality education by hiring quality teachers</h1>
              <p>
                Making refined and qualified Teachers to all schools in Nigeria
                is our Priority. Our Platform Creates a Link between teachers
                and Schools by providing a medium to vet teachers, and act as a
                means of communication to all parties
              </p>
            </div>
            <figure>
              <img src={Intro3} />
            </figure>
          </section>
        </div>
        <section className="staffs-No">
          <div className="schools">
            <button>0</button>
            <button>9</button>
            <button>0</button>
            <h3>Registered Schools</h3>
          </div>
          <div className="teachers">
            <button>1</button>
            <button>9</button>
            <button>0</button>
            <h3>Qualified Teachers</h3>
          </div>
        </section>
        <section className="about">
          <figure>
            <img src={Maleworker} alt="" />
          </figure>
          <div>
            <h2>Who we are</h2>
            <p>
              We are dedicated to providing quality education to students in
              line with the SDG goal - We accept applications from, and examine
              teachers to ensure that quality would be provided while teaching.
            </p>
            <button className="sign-up-btn">
              <Link to="/join">SIGN UP</Link>
            </button>
          </div>
        </section>
        <section className="App">
          <div className="our-App">
            <h2>Get The App</h2>
            <p>
              Our mobile Application makes accessing our services even easier.
              Get access to the best quality of teachers via a tap from your
              mobile phone
            </p>
            <button>COMING SOON</button>
          </div>
          <figure className="App-sample">
            <img className="iphone1" src={Iphone1} />
            <img className="iphone2" src={Iphone2} />
          </figure>
        </section>
        <section className="question">
          <figure>
            <img src={Femaleworker} alt="" />
          </figure>
          <div>
            <h2>Have Questions?</h2>
            <p>
              We have compiled a list of the questions that have been answered
            </p>
            <button>
              <Link to="/join">SIGN UP</Link>
            </button>
          </div>
        </section>
        <section className="contact-us">
          <h2>Contact us</h2>
          <form>
            <input type="text" placeholder="Email Adress" required />
            <br />
            <textarea placeholder="Message" rows="4" cols="50"></textarea>
            <br />
            <button type="submit">SEND</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
