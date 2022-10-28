import "./account.css";
import { Link } from "react-router-dom";
import NavBar from "../navigation/mainNav";
import { useState, useEffect } from "react";
import signup from "../../data/signupApi";
import axios from "axios";

const ParentSignup = () => {

const formDataPost = `${signup}/parents`;

const initialValues = {nameOfParent: "", email: "", phone: "", password: "",}
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false)

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormValues({...formValues, [name]: value})
} 

const handleSubmit = (e) => {
  console.log(formValues.nameOfParent,
   formValues.email,
   formValues.phone,
   formValues.password,)
  setFormErrors(validate(formValues))
  setIsSubmit(true);
  axios.post(formDataPost, {
    nameOfParent: formValues.nameOfParent,
    email: formValues.email,
    phone: formValues.phone,
    password: formValues.password,
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
  
  e.preventDefault()
}

useEffect(() => {
  console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues)
  }
},[formValues])

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if(!values.nameOfParent){
    errors.nameOfParent = "Username is required";
  }
  if(!values.email){
    errors.email = "Email is required";
  } else if(!regex.test(values.email)){
    errors.email = "This is not a valid email format!";
  }
  if(!values.phone){
    errors.phone = "Phone number is required";
  }
  console.log(values.password)

  if(!values.password){
    errors.password = "Password is required";
  }
  if(values.password.length < 4){
    console.log("happy")
    errors.password = "Password must be more than 4 characters!";
  }
  if(values.password.length > 10){
    errors.password = "Password must not exceed 10 characters!";
  }
  return errors;
}

    return (
      <>
      <NavBar/>
        <div className="container1">
          <section className="sign-section">
            <h1>Sign Up as Parent</h1>
            <form onSubmit={handleSubmit}>
              <input
                name="nameOfParent"
                type="text"
                placeholder="Name"
                value={formValues.nameOfParent}
                onChange={handleChange}
              />
              <p style={errorColor}>{formErrors.nameOfParent}</p>
              <br />
              <input
                name="email"
                type="email"
                placeholder="E-mail Adress"
                value={formValues.email}
                onChange={handleChange}
          /> 
           <p style={errorColor}>{formErrors.email}</p>
              <br />
              <input
                name="phone"
                type="tel"
                placeholder="Phone no."
                value={formValues.phone}
                onChange={handleChange}
          />
                 <p style={errorColor}>{formErrors.phone}</p>
              <br />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                 />
                  <p style={errorColor}>{formErrors.password}</p>
              <br />
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <Link to="/parent">Login</Link>
            </p>
          </section>
        </div>
      </>
    );
  }

export default ParentSignup;

const errorColor = {
  color: "rgba(244, 80, 80, 1)",
  fontSize: "1rem",
  margin: "0 0 0"
}
