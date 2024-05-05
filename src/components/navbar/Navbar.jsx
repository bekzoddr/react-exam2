import React, { memo } from "react";
import { BsPerson, BsCart2, BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import navLogo from "../../assets/images/nav__logo.svg";
function Navbar() {
  return (
    <nav>
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
      <hr />
      <div className="navbar container">
        <div className="logo">
          <img src={navLogo} alt="navLogo" />
        </div>
        <ul className="nav__links ">
          <li className="nav__item">
            <NavLink to={"/"}>
              {" "}
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <span>Bags</span>
          </li>
          <li className="nav__item">
            <span>Sneakers</span>
          </li>
          <li className="nav__item">
            <span>Belt</span>
          </li>
          <li className="nav__item">
            <NavLink to={"/contact"}>
              {" "}
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default memo(Navbar);
