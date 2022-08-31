import React from "react";
import logo from '../images/Subtract.svg';
import Style from "../style/navbar.css";

const AppNav = () => {
    return(
        <header className="app-nav-header">
            <nav className="app-nav">
            <img src={logo}  alt="felt-logo"/>
            <span>Felt Teachers</span>
        </nav>
        </header>
    )
}

export default AppNav;