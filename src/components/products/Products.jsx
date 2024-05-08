import React, { memo } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCart, IoCartOutline } from "react-icons/io5";
import Loading from "../loading/Loading";
import { Container } from "@mui/material";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice"; // Assuming you have defined addToCart action

const Product = ({ data, title, categorys }) => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  if (!data) {
    return <Loading />;
  }

  let products = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="image-container">
        <img src={el.thumbnail} alt="Product" className="image" />
        <div className="navigation">
          <button onClick={() => dispatch(toggleToWishes(el))}>
            {wishes.some((w) => w.id === el.id) ? (
              <FaHeart className="likes" />
            ) : (
              <FaRegHeart className="likes" />
            )}
          </button>
          {cart.some((c) => c.id === el.id) ? (
            <button className="cart added">
              <IoCart />
            </button>
          ) : (
            <button onClick={() => dispatch(addToCart(el))} className="cart">
              <IoCartOutline />
            </button>
          )}
        </div>
      </div>
      <div className="card__body">
        <Link to={`/single/${el.id}`}>
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
    <Container maxWidth="xl">
      <div className="product__title container">
        <h1>{title}</h1>
        <br />
        <ul>{categorys}</ul>
        <br />
      </div>
      <div className="products container">{products}</div>
    </Container>
  );
};

export default memo(Product);
