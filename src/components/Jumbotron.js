import React from "react";
import "../style.css";
import HeaderImage from "../assets/images/restauranfood.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Jumbotron = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div></div>
      <article className="header-text-wrapper">
        <div aria-label="header title">
          <h3 className="header-title">Little Lemon</h3>
          <h4 className="header-subtitle markazi-text">Chicago</h4>
        </div>
        <h5 className="header-description" aria-label="header description">
          Savor authentic Italian cuisine and rustic ambiance. From handcrafted
          pastas and wood-fired pizzas to delectable desserts, we bring Italy to
          your table.
        </h5>
        <Button
          className="yellow-button"
          ariaLabel="Reservation Page Button"
          onClick={() => navigate("/reservations")}
        >
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
