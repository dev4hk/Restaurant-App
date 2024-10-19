import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="markazi-text testimonials-title">Testimonials</h2>
      <div className="testimonials-cards">
        <div></div>
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <div></div>
      </div>
    </section>
  );
};

export default Testimonials;
