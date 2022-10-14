import React, { Component } from "react";
import Style from "../style/account.css";
import { Link } from "react-router-dom";
import NavBar from "./mainNav";
import { useState } from "react";
import axios from "axios";

class ParentSignup extends Component {
  constructor() {
    super();
    this.state = {
      nameOfParent: "",
      email: "",
      phone: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
    console.log(e.target.value);
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    axios
      .post("https://felt-teacher.herokuapp.com/api/parents", {
        nameOfParent: "Shulamite",
        email: "prosperj561@gmail.com",
        phone: 2348039739814,
        password: "shlamite40",
      })
      .then((response) => {
        if (response.data.status === "success") {
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { nameOfParent, email, phone, password } = this.state;
    return (
      <>
        <header>
          <NavBar />
        </header>
        <div className="container1">
          <section className="sign-section">
            <h1>Sign Up as Parent</h1>
            <form onSubmit={this.submitHandler}>
              <input
                name="nameOfParent"
                type="text"
                placeholder="Name"
                value={nameOfParent}
                onChange={this.changeHandler}
              />{" "}
              <br />
              <input
                name="email"
                type="email"
                placeholder="E-mail Adress"
                required
                value={email}
                onChange={this.changeHandler}
              />{" "}
              <br />
              <input
                name="phone"
                type="tel"
                placeholder="Phone no."
                required
                value={phone}
                onChange={this.changeHandler}
              />{" "}
              <br />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={this.changeHandler}
              />{" "}
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
}

export default ParentSignup;
