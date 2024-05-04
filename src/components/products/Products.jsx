import React, { memo } from "react";
import image from "../../assets/images/image.png";
import { GrCart } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
function Products() {
  return (
    <>
      <div className="product__title container">
        <h1>Best Seller</h1>
        <ul>
          <li>All</li>
          <li>Bags</li>
          <li>Sneakers</li>
          <li>Belt</li>
          <li>Sunglasses</li>
        </ul>
      </div>
      <div className="products container">
        <div className="card">
          <div className="image-container">
            <img src={image} alt="Your Image" className="image" />
            <div className="navigation">
              <button>
                <FaHeart />
              </button>
              <button>
                <GrCart />
              </button>
            </div>
          </div>
          <div className="card__body">
            <h2>Bmw m5 f90</h2>
            <div className="rating">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <div className="prices">
              <h2 className="price">$748</h2>
              <div className="count">
                <h4 className="old__price">$534,33</h4>
                <h4>24% Off</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Products);
