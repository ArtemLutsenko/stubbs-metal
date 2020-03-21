import React from "react";
import "./Featured.scss";
import Carrousel from "./Carrousel";

export const Featured = () => {
  return (
    <div className="featured">
      <Carrousel />
      <div className="featured__text-block-container">
        <div className="featured__text-block">
          <h2>Высокоточное изготовление</h2>
          <div className="featured__horisontal-line"></div>
          <h2>изделий из метала по чертежам</h2>
        </div>
      </div>
    </div>
  );
};
