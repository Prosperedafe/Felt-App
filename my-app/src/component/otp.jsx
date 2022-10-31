import React, { useState, useEffect } from "react";
import "../style/password.css";
import NavBar from "./navigation/mainNav";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) 
    return false;

    setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)])

    if(element.nextSibling) {
        element.nextSibling.focus()
    }
  };

  return (
    <>
      <NavBar />
      <form className="verify">
        {otp.map((data, index) => {
          return (
            <input
              type="number"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={e => handleChange(e.target, index)}
              onFocus={e => e.target.select()}
            />
          );
        })}
        <br/>
        <p>OTP Entered - {otp.join("")}</p>
        <button
        onClick={e => setOtp([...otp.map(v => "")])}
        >Clear</button>
      </form>
    </>
  );
};

export default Otp;
