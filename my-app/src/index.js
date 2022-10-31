import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import TeacherProfile from "./component/teacherProfile";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import EditProfile from "./component/profileEdit";
import Otp from "./component/otp";
import TeachersHomepage from "./component/teachersHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
