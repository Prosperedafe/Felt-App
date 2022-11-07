import "./App.css";
import Home from "./component/home";
import JoinUs from "./component/account/join";
import TeacherSignup from "./component/teacher/teacherSignup";
import TeacherLogin from "./component/teacher/teacherLogin";
import TeacherProfile from "./component/teacher/teacherProfile";
import ParentSignup from "./component/parent/parentSignup";
import ParentLogin from "./component/parent/parentLogin";
import ParentProfile from "./component/parent/parentProfile";
import SchoolSignup from "./component/school/schoolSignup";
import SchoolLogin from "./component/school/schoolLogin";
import Welcome from "./component/welcome";
import PasswordReset from "./component/passReset";
import PassRecover from "./component/passRecover";
import Faqs from "./faq/faq";
import EditProfile from "./component/profileEdit";
import Otp from "./component/parent/parentOtp";
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
      <Route path="/parentprofile" element={<ParentProfile />} />
      <Route path="/edit" element={<EditProfile />} />
      <Route path="/otp" element={ <Otp/>} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
