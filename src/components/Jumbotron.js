import React from "react";
import "../style.css";
import HeaderImage from "../assets/images/restauranfood.jpg";
import Button from "./Button";

const Jumbotron = () => {
  return (
    <header className="header">
      <div></div>
      <article className="header-text-wrapper">
        <div aria-label="header title">
          <h3 className="header-title">Little Lemon</h3>
          <h4 className="header-subtitle markazi-text">Chicago</h4>
        </div>
        <h5 className="header-description" aria-label="header description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
        <Button className="yellow-button" ariaLabel="Reservation Page Button">
          Reserve a Table
        </Button>
      </article>
      <div className="header-image-wrapper" aria-label="header image">
        <img className="header-image" src={HeaderImage} alt="header-image" />
      </div>
      <div></div>
    </header>
  );
};

export default Jumbotron;
