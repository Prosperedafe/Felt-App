import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TeacherProfile from "./component/teacherProfile";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import EditProfile from "./component/profileEdit";
import Token from "./component/token";
import TeachersHomepage from "./component/teachersHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
