import React, { useState, useEffect } from "react";
import Cat from "../assets/cat.png";
import CardBottomText from "./CardBottomText";
import { staticSubTitle, hoverSubTitle } from "../constats";

function Card({
  taste,
  description,
  isDisabled = false,
  isSelected = false,
  weight,
  composition,
}) {
  const [selected, setSelected] = useState(isSelected);
  const [subTitle, setSubTitle] = useState(staticSubTitle);

  useEffect(() => {
    if (!selected) {
      setSubTitle(staticSubTitle);
    }
  }, [selected]);

  const selectedStyles = selected
    ? "card__top  card__top-selected"
    : "card__top";

  const disabledStyles = isDisabled
    ? "card__top  card__top-disabled"
    : "card__top";

  const hoverStyles =
    subTitle === hoverSubTitle
      ? "card__subtitle card__subtitle-hover"
      : "card__subtitle";

  const handleMouseEnter = () => {
    if (selected) {
      setSubTitle(hoverSubTitle);
    }
  };

  const handleMouseLeave = () => {
    if (selected) {
      setSubTitle(staticSubTitle);
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => setSelected(() => !selected)}
    >
      <div className={isDisabled ? disabledStyles : selectedStyles}>
        <div className="card__wrapper">
          <h3 className={hoverStyles}>{subTitle}</h3>
          <h2 className="card__title">Нямушка</h2>
          <p className="card__title card__title-small">{taste}</p>
          <div className="card__description">
            {description.split("\n").map((element, idx) => (
              <div key={idx}>{element}</div>
            ))}
          </div>
          <img className="card__image" src={Cat} alt="cat" />
          <div className="card__weight">
            {weight}
            <span className="card__weight-small">кг</span>
          </div>
        </div>
      </div>
      <CardBottomText
        selected={selected}
        isDisabled={isDisabled}
        taste={taste}
        composition={composition}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Card;
