import React from "react";
import "../style.css";

const RestaurantDetail = () => {
  return (
    <header className="header">
      <div></div>
      <section className="header-text-wrapper">
        <div>
          <h3 className="header-title">Little Lemon</h3>
          <h4 className="header-subtitle markazi-text">Chicago</h4>
        </div>
        <div className="header-reservation-description">
          <div className="header-description-group">
            <h5 className="header-description-group-title">Location:</h5>
            <p className="header-description-group-detail">
              123 XXXst, Chicago, IL
            </p>
          </div>
          <div className="header-description-group">
            <h5 className="header-description-group-title">Phone:</h5>
            <p className="header-description-group-detail">XXX-XXX-XXXX</p>
          </div>
          <div className="header-description-group">
            <h5 className="header-description-group-title">Hours:</h5>
            <p className="header-description-group-detail">
              Sun - Thu: 11am - 10pm
            </p>
            <p>Fri - Sat: 11am - 12am</p>
          </div>
        </div>
      </section>

      <div></div>
    </header>
  );
};

export default RestaurantDetail;
