import React from "react";
import "../style.css";
import GreekSalad from "../assets/images/greek salad.jpg";

const SpecialsCard = () => {
  return (
    <div className="card">
      <img className="card-image" src={GreekSalad} alt="card-image" />
      <div className="card-details">
        <div className="card-title-wrapper">
          <h3 className="markazi-text card-title">Greek Salad</h3>
          <span className="card-price">$ 12.99</span>
        </div>
        <p className="card-description">
          The famous greek salad of crispy lettuce, peppers, olives and out
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <p className="card-delivery-text">Order a delivery</p>
      </div>
    </div>
  );
};

export default SpecialsCard;
