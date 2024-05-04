import React, { memo } from "react";
import HeroCards from "../heroCards/HeroCards";

function Hero() {
  return (
    <>
      <div className="hero">
        <h1 className="container">
          Super Flash Sale <br /> 50% Off
        </h1>
      </div>
      <HeroCards />
    </>
  );
}

export default memo(Hero);
