import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardList() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("./data.json");

      setItems(await response.json());
    })();
  }, []);

  return (
    <div className="hero__wrapper">
      {items && items.map((card) => <Card key={card.id} {...card} />)}
    </div>
  );
}

export default CardList;
