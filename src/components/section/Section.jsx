import React, { memo } from "react";
import image from "../../assets/images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.svg";
function Section() {
  return (
    <section>
      <div className="title">
        <h1>
          Adidas Men Running <br /> Sneakers
        </h1>
        <h2>Performance and design. Taken right to the edge.</h2>
        <h3>SHOP NOW</h3>
        <hr />
      </div>
      <img src={image} alt="" />
    </section>
  );
}

export default memo(Section);
