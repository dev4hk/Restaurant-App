import React from "react";
import SpecialsCard from "./SpecialsCard";
import Button from "./Button";
import GreekSalad from "../assets/images/greek salad.jpg";
import Bruschetta from "../assets/images/bruchetta.svg";
import LemonDessert from "../assets/images/lemon dessert.jpg";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$10.99",
    description:
      "A refreshing mix of cucumbers, tomatoes, feta cheese, olives, and onions, drizzled with olive oil.",
    image: GreekSalad,
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$8.99",
    description:
      "Toasted bread topped with fresh tomatoes, basil, garlic, and a hint of balsamic glaze.",
    image: Bruschetta,
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$7.99",
    description:
      "A tangy and sweet lemon custard with a buttery graham cracker crust.",
    image: LemonDessert,
  },
];

const Specials = () => {
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
          {menuItems.map((item) => (
            <SpecialsCard item={item} key={`[specials]${item.id}`} />
          ))}
        </div>
      </article>
      <div></div>
    </section>
  );
};

export default Specials;
