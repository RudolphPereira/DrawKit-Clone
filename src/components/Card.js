import React from "react";
import "./Card.scss";

function Card({ image, title, subtitle, desc, footer }) {
  return (
    <div className="card">
      <div className="card__image--container">
        <img src={image} alt="One" className="card__image" />
      </div>

      <div className="card__text--container">
        <h2 className="card__title">{title}</h2>
        <p className="card__sub--title">{subtitle}</p>
        <p className="card__desc">{desc}</p>
        <p className="card__footer">{footer}</p>
      </div>
    </div>
  );
}

export default Card;
