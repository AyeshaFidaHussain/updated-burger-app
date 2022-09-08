import React, { useContext } from "react";

import { BurgerContext } from "../../context/BurgerContext";

import "./burger.css";

const ShowBurgerContents = () => {
  const { burgerContents } = useContext(BurgerContext);
  return (
    <div className="burger-container">
      <div className="burger-top" />
      {burgerContents && (
        burgerContents.length < 1 ? (
          <h3>Add Ingredients here</h3>
        ) : "")}
      {burgerContents?.map((ingredients, index) => (
        <div key={index} className={`${ingredients}`} />
      ))}
      <div className="burger-bottom" />
    </div>
  );
};
export default ShowBurgerContents;
