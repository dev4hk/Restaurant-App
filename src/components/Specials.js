import React from "react";
import SpecialsCard from "./SpecialsCard";
import Button from "./Button";

const Specials = () => {
  return (
    <section className="specials">
      <div></div>
      <div>
        <div className="specials-header">
          <h2 className="specials-title">This weeks specials!</h2>
          <Button className="yellow-button">Online Menu</Button>
        </div>
        <div className="specials-cards">
          <SpecialsCard />
          <SpecialsCard />
          <SpecialsCard />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Specials;
