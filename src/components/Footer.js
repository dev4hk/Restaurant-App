import React from "react";
import footerImg from "../assets/images/Mario and Adrian A.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div></div>
      <img className="footer-image" src={footerImg} alt="footer-img" />
      <div className="footer-column">
        <h3 className="footer-title">Doormat Navigation</h3>
        <ul className="footer-links">
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
      <div className="footer-column">
        <h3 className="footer-title">Contact</h3>
        <ul className="footer-links">
          <li>
            <p>123 XXXst, Chicago, IL</p>
          </li>
          <li>
            <p>xxx-xxx-xxxx</p>
          </li>
          <li>
            <p>xxx@xxx.com</p>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Social Media Links</h3>
        <ul className="footer-links">
          <li>
            <p>Facebook</p>
          </li>
          <li>
            <p>Instagram</p>
          </li>
          <li>
            <p>Threads</p>
          </li>
        </ul>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
