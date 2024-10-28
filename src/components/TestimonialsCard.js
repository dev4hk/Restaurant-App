import React from "react";

const TestimonialsCard = ({ item }) => {
  return (
    <article className="testimonials-card">
      <div className="testimonials-card-rate" aria-label="rate">
        {item.rate}/5
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
