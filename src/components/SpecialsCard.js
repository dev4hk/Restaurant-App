import React from "react";
import "../style.css";

const SpecialsCard = ({ item }) => {
  return (
    <section className="specials-card" aria-label="special detail">
      <img className="specials-card-image" src={item.image} alt="card-image" />
      <div className="specials-card-details">
        <div className="specials-card-title-wrapper">
          <h3 className="markazi-text card-title">{item.name}</h3>
          <span className="specials-card-price">{item.price}</span>
        </div>
        <p className="specials-card-description">{item.description}</p>
      </div>
      <p className="specials-card-delivery-text">Order a delivery</p>
    </section>
  );
};

export default SpecialsCard;
