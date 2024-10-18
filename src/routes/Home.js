import React from "react";
import Main from "../Main";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
