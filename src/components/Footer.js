import React from "react";
import footerImg from "../assets/images/Mario and Adrian A.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={footerImg} alt="footer-img" />
      <div>
        <h3>Doormat Navigation</h3>
        <ul>
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
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a>Address</a>
          </li>
          <li>
            <a>Phone Number</a>
          </li>
          <li>
            <a>Email</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li>
            <a>Address</a>
          </li>
          <li>
            <a>Phone Number</a>
          </li>
          <li>
            <a>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
