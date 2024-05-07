import React from "react";
import { heroCards } from "../../static";
function HeroCards() {
  const heroCard = heroCards?.map((el) => (
    <div
      style={{ backgroundImage: `url(${el.bg})` }}
      key={el.id}
      className="card"
    >
      <h2 className="title">{el.title}</h2>
      <h2
        style={{ position: "relative", bottom: el.textStyle }}
        className="price"
      >
        {el.price}
      </h2>
      <div
        style={{
          position: "relative",
          top: el.style,
          bottom: el.stylee,
        }}
        className="old__price"
      >
        <h3> {el.oldPrice}</h3>
        <h4>{el.count}</h4>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="hero__cards">{heroCard}</div>
    </div>
  );
}

export default HeroCards;
