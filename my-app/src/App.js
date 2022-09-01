import "./App.css";
import Home from "./component/home";
import JoinUs from "./component/join";
import ParentSignup from "./component/parentSignup";
import SchoolSignup from "./component/schoolSignup";
import TeacherSignup from "./component/teacherSignup";
import Welcome from "./component/welcome";
import ParentLogin from "./component/parentLogin";
import SchoolLogin from "./component/schoolLogin";
import TeacherLogin from "./component/teacherLogin";
import PasswordReset from "./component/passReset";
import PassRecover from "./component/passRecover";
import Faqs from "./component/faq";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/join" element={<JoinUs />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/parent" element={<ParentLogin />} />
      <Route path="/teacher" element={<TeacherLogin />} />
      <Route path="/school" element={<SchoolLogin />} />
      <Route path="/parents" element={<ParentSignup />} />
      <Route path="/schools" element={<SchoolSignup />} />
      <Route path="/teachers" element={<TeacherSignup />} />
      <Route path="/reset" element={<PasswordReset />} />
      <Route path="/recover" element={<PassRecover />} />
      <Route path="/faq(s)" element={<Faqs />} />
    </Routes>
  );
};

export default App;
