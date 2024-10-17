import React from "react";
import { ReactComponent as Logo } from "./assets/images/Logo.svg";
import "./style.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div></div>
      <div className="logo-wrapper">
        <Logo />
      </div>

      <ul className="navbar-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Nav;
