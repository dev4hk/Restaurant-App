import React from "react";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";
import "../style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div></div>
      <div className="logo-wrapper">
        <Logo />
      </div>

      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Nav;
