import React from "react";
import { brands, delivery } from "../../static/index";
import { Container } from "@mui/material";
import { IoStarSharp } from "react-icons/io5";
import image from "../../assets/images/shoe.svg";
import Button from "@mui/material/Button";
const HomeItems = () => {
  const items = delivery?.map((el) => (
    <div key={el.id} className="content">
      <img src={el.image} alt="" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  ));
  const brand = brands?.map((el) => (
    <div key={el.id} className="brand">
      <img src={el.image} alt="image" />
      <div className="text">
        <h4>01 Jan, 2015</h4>
        <h2>{el.title}</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  ));
  return (
    <Container maxWidth="xl">
      {" "}
      <div className="items">
        <div className="deliver__items">{items}</div>
        <h1>LATEST NEWS</h1>
        <div className="brand__items">{brand}</div>
        <h1>FEATURED PRODUCTS</h1>
        <div className="advertiesment">
          {[...Array(3)].map((_, index) => (
            <div className="box" key={index}>
              <img src={image} alt="" />
              <div className="item">
                <h2>
                  Blue Swade Nike <br /> Sneakers
                </h2>
                <div className="stars">
                  {" "}
                  {[...Array(4)].map((_, index) => (
                    <IoStarSharp className="star" key={index} />
                  ))}
                  <IoStarSharp />
                </div>
                <div className="prices">
                  <h2 className="price">$499</h2>
                  <h2 className="price old">$599</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="send container">
        <input placeholder="Search query..." type="text" />
        <Button variant="contained">Search</Button>
      </div>
    </Container>
  );
};

export default HomeItems;
