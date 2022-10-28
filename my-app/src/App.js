import "./App.css";
import Home from "./component/home";
import JoinUs from "./component/account/join";
import ParentSignup from "./component/account/parentSignup";
import SchoolSignup from "./component/account/schoolSignup";
import TeacherSignup from "./component/account/teacherSignup";
import ParentLogin from "./component/account/parentLogin";
import SchoolLogin from "./component/account/schoolLogin";
import TeacherLogin from "./component/account/teacherLogin";
import Welcome from "./component/welcome";
import PasswordReset from "./component/passReset";
import PassRecover from "./component/passRecover";
import Faqs from "./component/faq";
import TeacherProfile from "./component/teacherProfile";
import EditProfile from "./component/profileEdit";
import Token from "./component/token";
import Page404 from "./component/page404";
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
      <Route path="/profile" element={<TeacherProfile />} />
      <Route path="/edit" element={<EditProfile />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/passcode" component={() => <Token authorized={false} />} />
    </Routes>
  );
};

export default App;
