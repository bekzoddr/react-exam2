import React from "react";
import { BsPerson, BsCart2, BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import Badge from "@mui/material/Badge";

const Subnav = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const carts = useSelector((state) => state.cart.value);
  return (
    <Container maxWidth="xl">
      <div className="sub__nav container">
        <div className="language">
          <h4>
            EN <FiChevronDown />
          </h4>
          <h4>
            USD <FiChevronDown />
          </h4>
        </div>
        <div className="services">
          <NavLink to={"/login"}>
            <BsPerson className="icon" />
          </NavLink>
          <NavLink to={"/wishlist"}>
            <Badge color="success" badgeContent={wishes.length}>
              {" "}
              <FaRegHeart className="icon" />
            </Badge>
          </NavLink>
          <NavLink to={"/cart"}>
            <Badge color="success" badgeContent={carts.length}>
              {" "}
              <BsCart2 className="icon" />
            </Badge>
          </NavLink>
          <h4>Items</h4>
          <NavLink to={""}>
            <p>$0.00</p>
            <BsSearch className="icon" />
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default Subnav;
