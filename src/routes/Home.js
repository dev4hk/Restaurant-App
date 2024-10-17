import React from "react";
import Main from "../Main";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
