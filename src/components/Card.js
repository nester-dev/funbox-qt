import React from "react";
import Cat from "../assets/cat.png";

function Card(props) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <h3 className="card__subtitle">Сказочное заморское яство</h3>
        <h2 className="card__title">Нямушка</h2>
        <p className="card__title card__title-small">с фуа-гра</p>
        <p className="card__description">
          10 порций <br />
          мышь в подарок
        </p>
        <img className="card__image" src={Cat} alt="cat" />
        <div className="card__weight">
          0,5 <span className="card__weight-small">кг</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
