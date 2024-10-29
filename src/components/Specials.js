import React, { useContext } from "react";
import SpecialsCard from "./SpecialsCard";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const Specials = () => {
  const { specials } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <section className="specials">
      <div></div>
      <article>
        <div className="specials-header">
          <h2 className="specials-title">This weeks specials!</h2>
          <Button
            className="yellow-button"
            ariaLabel="Visit Online Menu"
            onClick={() => navigate("/menu")}
          >
            Online Menu
          </Button>
        </div>
        <div className="specials-cards">
          {specials.map((item) => (
            <SpecialsCard item={item} key={`[specials]${item.id}`} />
          ))}
        </div>
      </article>
      <div></div>
    </section>
  );
};

export default Specials;
