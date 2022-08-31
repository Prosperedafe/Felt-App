import React from "react";
import Style from "../style/password.css";
import NavBar from "./mainNav";

const ConfirmPassword = () => {
  return (
    <>
    <NavBar/>
    <div className="confirmation">
      <div>
        <h1>
          We’ve sent you a password reset pls check your E-mail for confirmation
        </h1>
      </div>
    </div>
    </>
  );
};

export default ConfirmPassword;
