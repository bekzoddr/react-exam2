import React from "react";
import image from "../../assets/images/empty-wishlist.webp";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const EmptyWishlist = () => {
  return (
    <div
      className="empty__wishlist"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <img src={image} alt="" />
      <h2 style={{ color: "red" }}>Your Wishlist is Empty</h2>
      <h3>Add some items to your wishlist</h3>
      <Link to={"/"}>
        <Button variant="contained">SHOP NOW</Button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
