import React from "react";
import Style from "../style/password.css";
import { useState } from "react";

const PasswordReset = () => {
  //   const [passwordType, setPasswordType] = useState("password");
  //   const [passwordInput, setPasswordInput] = useState("");
  //   const handlePasswordChange = (evnt) => {
  //     setPasswordInput(evnt.target.value);
  //   };
  //   const togglePassword = () => {
  //     if (passwordType === "password") {
  //       setPasswordType("text");
  //       console.log("hello");
  //     }
  //     setPasswordType("password");
  //   };

  return (
    <div className="updatePassword">
      <div>
        <h1>Password Reset</h1>
        <form>
          <input
            // onChange={handlePasswordChange}
            type="password"
            placeholder="New Password"
            required
          />
          {/* <button onClick={togglePassword}>kjvt</button> */}
          <br />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
