import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";
import { ReactComponent as HamburgerMenu } from "../assets/images/icon _hamburger menu.svg";
import "../style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div></div>
      <div className="logo-wrapper">
        <Logo />
      </div>

      <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleMenuClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleMenuClose}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={handleMenuClose}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" onClick={handleMenuClose}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" onClick={handleMenuClose}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={handleMenuClose}>
            Login
          </Link>
        </li>
      </ul>
      <div className="navbar-hamburger" onClick={handleMenuToggle}>
        {menuOpen ? (
          <span className="close-icon">Close X</span>
        ) : (
          <HamburgerMenu className="hamburger-icon" />
        )}
      </div>
    </nav>
  );
};

export default Nav;
