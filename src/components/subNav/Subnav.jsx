import React from "react";
import { BsPerson, BsCart2, BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { Container } from "@mui/material";
const Subnav = () => {
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
          <NavLink to={"/"}>
            <BsPerson className="icon" />
          </NavLink>
          <NavLink to={"/wishlist"}>
            <FaRegHeart className="icon" />
          </NavLink>
          <NavLink to={""}>
            {" "}
            <BsCart2 className="icon" />
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
