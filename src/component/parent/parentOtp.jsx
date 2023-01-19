import React, { useState } from "react";
import "./otp.css";
import api from "../../data/signupApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "../spinner";
const Otp = () => {
  const tokenVerify = `${api}/verify/parent`;

  const initialValue = {
    code: "",
  };

  const [value, setValue] = useState(initialValue);
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    // const result = event.target.value.replace(/\D/g, "");
    const { name, value } = event.target;
    setValue({ ...value, [name]: value });
  };

  const handleSubmit = (e) => {
    setIsloading(true);
    e.preventDefault();
    axios
      .post(tokenVerify, {
        code: value.code,
      })
      .then(
        (response) => {
          console.log(response);
          toast.success("Registration Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setIsloading(false);
          return navigate("/parentprofile", { replace: true });
        },
        (error) => {
          console.log(error.response.data.message);
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setIsloading(false);
        }
      );
  };

  return (
    <>
      <div className="verify">
        <div>
          {isloading ? <Spinner /> : ""}
          <p>
            We've Sent you a 6 digit code to your E-mail. pls check for
            confirmation. Make sure you input the correct code
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="code"
                maxLength={6}
                value={value.code}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleSubmit} disabled={isloading} type="submit">
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
