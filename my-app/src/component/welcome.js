import React from "react";
import Femaleworker from "../images/female-worker.svg";
import Style from "../style/join.css";
import AppNav from "./defNav";
import Footer from "./footer";
import HomeBtn from "./home-btn";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <AppNav />
      <main className="join-us">
        <HomeBtn />
        <section className="select-profile">
          <figure>
            <img src={Femaleworker} alt="" />
          </figure>
          <div>
            <h1>Welcome Back, login to your Account</h1>
            <button>
              <Link className="links" to="/teacher">
                TEACHER
              </Link>
            </button>
            <button>
              <Link className="links" to="/school">
                SCHOOL
              </Link>
            </button>
            <button>
              <Link className="links" to="/parent">
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
export default Welcome;
