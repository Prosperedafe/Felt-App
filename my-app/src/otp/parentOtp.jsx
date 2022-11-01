import React, { useState, useEffect } from "react";
import "./otp.css"
import signup from "../data/signupApi";
import NavBar from "../component/navigation/mainNav";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

const Otp = () => {

const tokenVerify = `${signup}/verify/parent`;

  const handleChange = () => {
    if (isNaN) 
    return false;
  }

  const handleSubmit = (e) =>{
    axios.get(tokenVerify)
  }
 
  return (
    <>
      <NavBar />
      <form className="verify" onSubmit={handleSubmit}>
        <div>
            <input
              type="text"
              name="code"
              maxLength={6}
              onChange={handleChange}
            />
        </div>
      </form>
    </>
  );
};

export default Otp;
