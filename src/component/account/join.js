import React from "react";
import Femaleworker from "../../images/female-worker.svg";
import "./join.css";
import HomeBtn from "../navigation/home-btn";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <>
      <main className="join-us">
        <HomeBtn />
        <section className="select-profile">
          <img src={Femaleworker} alt='worker' />
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
    </>
  );
};
export default JoinUs;
