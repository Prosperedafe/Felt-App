import React from "react";
import Femaleworker from "../images/female-worker.svg";
import "./account/join.css";
import NavBar from "../component/navigation/mainNav";
import Footer from "../component/navigation/footer";
import HomeBtn from "../component/navigation/home-btn";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <NavBar />
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
