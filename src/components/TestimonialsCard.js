import React from "react";
import { toOneDecimalPlace } from "../utils";

const TestimonialsCard = ({ item }) => {
  return (
    <article className="testimonials-card">
      <div className="testimonials-card-rate" aria-label="rate">
        {toOneDecimalPlace(item.rate)}/5.0
      </div>
      <div className="testimonials-card-profile" aria-label="user detail">
        <img
          src={item.image}
          className="testimonials-card-profile-image"
          alt="testimonial-image"
        />
        <div className="testimonials-card-profile-name">{item.name}</div>
      </div>
      <div className="testimonials-card-comment" aria-label="testimonial">
        {item.testimonial}
      </div>
    </article>
  );
};

export default TestimonialsCard;
