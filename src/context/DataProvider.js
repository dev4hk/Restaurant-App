import { createContext } from "react";
import GreekSalad from "../assets/images/greek salad.jpg";
import Bruschetta from "../assets/images/bruchetta.svg";
import LemonDessert from "../assets/images/lemon dessert.jpg";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const specials = [
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

  return (
    <DataContext.Provider value={{ specials }}>{children}</DataContext.Provider>
  );
};
