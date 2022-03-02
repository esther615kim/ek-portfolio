import React, { useState, useEffect } from "react";
import { MenuOptions } from "../context/CardContext";
import About from "./Cards/About/index";
import Work from "./Cards/Work/index";
import Contact from "./Cards/Contact/index";

const Menu = () => {
  const [card, setCard] = useState<MenuOptions>("about");

  useEffect(() => {}, [card]);

  const handleClickCard = (e) => {
    e.preventDefault();
    setCard((prev) => e.target.value);
  };
  
  return (
    <div>
      <div className="md:text-lg dark:text-stone-200">
      <button
        value="about"
        onClick={handleClickCard}
        className="mx-2 font-semibold hover:text-red-400"
      >
        ABOUT
      </button>
      <span>/</span>
      <button
        value="work"
        onClick={handleClickCard}
        className="mx-2 font-semibold hover:text-red-400"
      >
        WORK
      </button>
      <span>/</span>
      <button
        value="contact"
        onClick={handleClickCard}
        className="mx-2 font-semibold hover:text-red-400"
      >
        CONTACT
      </button>
      </div>
      {card === "about" && <About />}
      {card === "work" && <Work />}
      {card === "contact" && <Contact />}
    </div>
  );
};

export default Menu;
