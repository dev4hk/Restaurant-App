import React from "react";
import "../style.css";
import HeaderImage from "../assets/images/restauranfood.jpg";
import Button from "./Button";

const Jumbotron = () => {
  return (
    <header className="header">
      <div></div>
      <div className="header-text-wrapper">
        <div>
          <h3 className="header-title">Little Lemon</h3>
          <h4 className="header-subtitle markazi-text">Chicago</h4>
        </div>
        <h5 className="header-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
        <Button className="yellow-button">Reserve a Table</Button>
      </div>
      <div className="header-image-wrapper">
        <img className="header-image" src={HeaderImage} alt="header-image" />
      </div>
      <div></div>
    </header>
  );
};

export default Jumbotron;
