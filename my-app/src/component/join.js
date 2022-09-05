import React from "react";
import Femaleworker from "../images/female-worker.svg";
import Style from "../style/join.css";
import Footer from "./footer";
import HomeBtn from "./home-btn";
import { Link } from "react-router-dom";
import NavBar from "./mainNav";

const JoinUs = () => {
  return (
    <>
      <NavBar />
      <main className="join-us">
        <HomeBtn />
        <section className="select-profile">
          <img src={Femaleworker} />
          <div>
            <h1>Join the Felt Teachers Community Today</h1>
            <p>Which Category Do You Belong</p>
            <button>
              <Link className="links" to="/teachers">
                TEACHER
              </Link>
            </button>
            <button>
              <Link className="links" to="/schools">
                SCHOOL
              </Link>
            </button>
            <button>
              <Link className="links" to="/parents">
                PARENT
              </Link>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default JoinUs;
