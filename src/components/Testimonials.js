import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const testimonialsArr = [
  {
    id: 1,
    name: "Jessica Morgan",
    testimonial:
      "Absolutely delightful! The food was exquisite and the service top-notch.",
    rate: 5,
    image:
      "https://cdn.pixabay.com/photo/2022/03/22/07/46/woman-7084501_1280.png",
  },
  {
    id: 2,
    name: "Ethan Richards",
    testimonial:
      "Wonderful atmosphere and the dishes were delicious. Highly recommend!",
    rate: 4.5,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png",
  },
  {
    id: 3,
    name: "Ava Thompson",
    testimonial:
      "A fantastic dining experience with exceptional flavors and great service.",
    rate: 4.7,

    image:
      "https://cdn.pixabay.com/photo/2021/01/17/09/11/woman-5924366_1280.jpg",
  },
  {
    id: 4,
    name: "Liam Johnson",
    testimonial: "The best restaurant in town! We loved every minute of it.",
    rate: 5,
    image:
      "https://cdn.pixabay.com/photo/2022/02/23/20/17/man-7031423_1280.png",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="markazi-text testimonials-title">Testimonials</h2>
      <article className="testimonials-cards">
        <div></div>
        {testimonialsArr.map((item) => (
          <TestimonialsCard key={item.id} item={item} />
        ))}

        <div></div>
      </article>
    </section>
  );
};

export default Testimonials;
