import React from "react";
import Style from "../style/password.css";
import AppNav from "./defNav";
import Back from "./backBtn";

const PassRecover = () => {
  return (
    <>
      <AppNav />
      <section className="password">
        <div className="passwordRecovery">
          <h1>Password Recovery</h1>
          <h2>
            Enter your E-mail and we will
            <br /> send you a reset
          </h2>
          <form>
            <input type="email" placeholder="E-mail Adress" required />
            <button type="submit">Verify</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PassRecover;