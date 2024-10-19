import React from "react";
import Jumbotron from "../components/Jumbotron";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Chicago from "../components/Chicago";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
  );
};

export default Home;
