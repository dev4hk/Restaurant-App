import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SmoothLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <li>
      <Link to={to} onClick={handleClick}>
        {children}
      </Link>
    </li>
  );
};

export default SmoothLink;
