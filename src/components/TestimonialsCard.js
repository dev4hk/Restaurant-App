import React from "react";

const TestimonialsCard = () => {
  return (
    <article className="testimonials-card">
      <div className="testimonials-card-rate" aria-label="rate">
        5/5
      </div>
      <div className="testimonials-card-profile" aria-label="user detail">
        <div className="testimonials-card-profile-image"></div>
        <div className="testimonials-card-profile-name">Common Name</div>
      </div>
      <div className="testimonials-card-comment" aria-label="testimonial">
        Thank you for great food and service. I enjoyed so much.
      </div>
    </article>
  );
};

export default TestimonialsCard;
