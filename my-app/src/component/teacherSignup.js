import React, { Component } from "react";
import Style from "../style/account.css";
import { Link } from "react-router-dom";
import NavBar from "./mainNav";
import axios from "axios";

class TeacherSignup extends Component {
  constructor() {
    super();
    this.state = {
      nameOfTeacher: "",
      email: "",
      phone: "",
      password: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://felt-teacher.herokuapp.com/api/schools", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { nameOfTeacher, email, phone, password } = this.state;
    return (
      <>
        <header>
          <NavBar />
        </header>
        <div className="container1">
          <section className="sign-section">
            <h1>Sign Up as Teacher</h1>
            <form onSubmit={this.submitHandler}>
              <input
                type="text"
                placeholder="Name"
                required
                name="nameOfTeacher"
                value={nameOfTeacher}
                onChange={this.changeHandler}
              />{" "}
              <br />
              <input
                type="email"
                placeholder="E-mail Adress"
                required
                name="email"
                value={email}
                onChange={this.changeHandler}
              />{" "}
              <br />
              <input
                type="tel"
                placeholder="Phone no."
                required
                name="phone"
                value={phone}
                onChange={this.changeHandler}
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={this.changeHandler}
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
              <br />
              <span>Click to get passcode</span>
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <Link to="/teacher">Login</Link>
            </p>
          </section>
        </div>
      </>
    );
  }
}

export default TeacherSignup;
