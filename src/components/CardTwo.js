import React from "react";
import "./CardTwo.scss";

function CardTwo({ image, title, subtitle, desc, footer }) {
  return (
    <div className="cardTwo">
      <div className="cardTwo__image--container">
        <img src={image} alt="One" className="cardTwo__image" />
      </div>

      <div className="cardTwo__text--container">
        <h2 className="cardTwo__title">{title}</h2>
        <p className="cardTwo__sub--title">{subtitle}</p>
        <p className="cardTwo__desc">{desc}</p>
        <p className="cardTwo__footer">{footer}</p>
      </div>
    </div>
  );
}

export default CardTwo;
