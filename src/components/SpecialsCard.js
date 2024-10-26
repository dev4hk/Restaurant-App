import React from "react";
import "../style.css";
import GreekSalad from "../assets/images/greek salad.jpg";

const SpecialsCard = () => {
  return (
    <section className="specials-card" aria-label="special detail">
      <img className="specials-card-image" src={GreekSalad} alt="card-image" />
      <div className="specials-card-details">
        <div className="specials-card-title-wrapper">
          <h3 className="markazi-text card-title">Greek Salad</h3>
          <span className="specials-card-price">$ 12.99</span>
        </div>
        <p className="specials-card-description">
          The famous greek salad of crispy lettuce, peppers, olives and out
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <p className="specials-card-delivery-text">Order a delivery</p>
      </div>
    </section>
  );
};

export default SpecialsCard;
