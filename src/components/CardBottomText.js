import React from "react";

function CardBottomText({
  selected,
  isDisabled,
  taste,
  composition,
  setSelected,
}) {
  const renderMessage = () => {
    if (isDisabled) {
      return (
        <p className="card__bottom-disabled">{`Печалька, ${taste} закончился.`}</p>
      );
    }

    if (selected) {
      return composition;
    }

    return (
      <>
        Чего сидишь? Порадуй котэ,
        <button className="card__button" type="button">
          <span
            onClick={() => setSelected(() => !selected)}
            className="card__button-dashed"
          >
            купи
          </span>
          .
        </button>
      </>
    );
  };

  const message = renderMessage();

  return <div className="card__bottom">{message}</div>;
}

export default CardBottomText;
