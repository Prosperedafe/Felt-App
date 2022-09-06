import React from "react";
import Style from "../style/password.css";
import { useState } from "react";
import NavBar from "./mainNav";

const PasswordReset = () => {
  return (
    <>
      <NavBar />
      <div className="updatePassword">
        <div>
          <h1>Password Reset</h1>
          <form>
            <input type="password" placeholder="New Password" required />
            <br />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
