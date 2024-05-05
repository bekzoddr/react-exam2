import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { GrCart } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import { useGetProductQuery } from "../../context/productApi";
function Products({ title }) {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const { data } = useGetProductQuery();
  if (!data) {
    return <Loading />;
  }
  const products = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="image-container">
        <img
          src={`https://picsum.photos/200?id=${el.id}`}
          alt="Product"
          className="image"
        />
        <div className="navigation">
          <button onClick={() => dispatch(toggleToWishes(el))}>
            {wishes.some((w) => w.id === el.id) ? (
              <FaHeart className="likes" />
            ) : (
              <FaRegHeart className="likes" />
            )}
          </button>
          <button>
            <GrCart />
          </button>
        </div>
      </div>
      <div className="card__body">
        <Link to={`/single/${el.id}`}>
          {" "}
          <h2>{el.title}</h2>
        </Link>

        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <MdOutlineStar key={index} />
          ))}
        </div>
        <div className="prices">
          <h2 className="price">${el.price}</h2>
          <div className="count">
            <h4 className="old__price">$534.33</h4>
            <h4>24% Off</h4>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="product__title container">
        <h1>{title}</h1>
        <ul>
          <li>All</li>
          <li>Bags</li>
          <li>Sneakers</li>
          <li>Belt</li>
          <li>Sunglasses</li>
        </ul>
      </div>
      <div className="products container">{products}</div>
    </>
  );
}

export default memo(Products);
