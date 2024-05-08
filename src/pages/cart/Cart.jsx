import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PatternFormat } from "react-number-format";
import { incCart, decCart, removeFromCart } from "../../context/cartSlice";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { IoArrowBack } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import empty from "../../assets/images/empty_cart_800x600_dribbble.png";
import TextField from "@mui/material/TextField";
import card from "../../assets/images/card.svg";
import paypal from "../../assets/images/paypal.svg";
import bank from "../../assets/images/bank.svg";

const BOT_TOKEN = "7184075474:AAFpvvne1_JAWppwweJNhGf_zVREtkQTvFs";
const USER_ID = "1867955740";
const CHAT_ID = "-4246362668";
const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOrder = () => {
    let text = "Buyurtma %0A%0A";
    text += `Ism: ${name} %0A`;
    text += `Familiya: ${lastName} %0A`;
    text += `Email: ${email} %0A`;
    text += `Telefon raqami: ${phone} %0A`;
    cart.forEach((product) => {
      text += `${product.title} %0A`;
      text += `Narxi: ${product.price} %0A`;
      text += `Soni: ${product.quantity} %0A`;
      text += `Jami: ${product.price * product.quantity} %0A`;
      text += `%0A%0A`;
    });
    text += `Jami narxi: ${calculateTotalPrice()}`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setShowOverlay(false);
    cart.forEach((product) => {
      dispatch(removeFromCart(product));
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let items = cart?.map((el, index) => (
    <React.Fragment key={index}>
      <div className="cart__box">
        <div className="title">
          <div className="remove" onClick={() => dispatch(removeFromCart(el))}>
            <button className="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 69 14"
                className="svgIcon bin-top"
              >
                <g clipPath="url(#clip0_35_24)">
                  <path
                    fill="black"
                    d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_35_24">
                    <rect fill="white" height="14" width="69"></rect>
                  </clipPath>
                </defs>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 69 57"
                className="svgIcon bin-bottom"
              >
                <g clipPath="url(#clip0_35_22)">
                  <path
                    fill="black"
                    d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_35_22">
                    <rect fill="white" height="57" width="69"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <img src={el.images[0]} alt="" width={137} />
          <h3>{el.title}</h3>
        </div>
        <div className="calculator">
          <h3>${el.price}</h3>
          <div className="quantity">
            <button
              disabled={el.quantity <= 1}
              onClick={() => dispatch(decCart(el))}
            >
              -
            </button>
            <h3>
              <span>{el.price}</span>
              {el.quantity}
            </h3>
            <button onClick={() => dispatch(incCart(el))}>+</button>
          </div>
          <h3>${el.price * el.quantity}</h3>
        </div>
      </div>
    </React.Fragment>
  ));
  let total = 0;

  let itemss = cart?.map((el, index) => {
    const subtotal = el.price * el.quantity; // Calculate subtotal for each item
    total += subtotal;
  });

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const [submit, setSubmit] = useState(null);

  return (
    <Container maxWidth="xl">
      {cart.length ? (
        <div className="cart__boxes container">
          <br />
          <br />
          <br />
          <br />
          <div className="cart__box box">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          <br />
          <br />
          <br />
          {items}
        </div>
      ) : (
        <div className="empty__cart">
          <img src={empty} alt="" />
          <Link to={"/"}>
            <Button variant="contained">SHOP NOW</Button>
          </Link>
        </div>
      )}
      <div className="bottom__actions">
        {" "}
        <div className="send cupon">
          <input placeholder="Voucher code" type="text" />
          <Button variant="contained">Redeem</Button>
        </div>
        <form className="total__box">
          <div className="titles">
            <div className="title">
              <h3>Subtotal</h3>
              <h3>Shipping fee</h3>
              <h3>Coupon</h3>
            </div>
            <div className="checks">
              <h3>${total}</h3>
              <h3>0</h3>
              <h3>NO</h3>
            </div>
          </div>

          <hr />
          <div className="values">
            <div className="total__price">
              <h2>TOTAL</h2>
              <h2>${total}</h2>
            </div>
            <Button onClick={toggleOverlay} variant="contained">
              Check out
            </Button>
          </div>
        </form>
      </div>

      <div className="container">
        {showOverlay && (
          <div className="overlay">
            <div className="overlay__title">
              <button onClick={toggleOverlay}>
                <IoArrowBack className="icon" />
              </button>
              <h1>Make Payment</h1>
              <button onClick={toggleOverlay}>
                <MdCancel className="icon" />
              </button>
            </div>
            <br />
            <br />
            <form>
              <div className="form">
                <div className="firstly">
                  <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="outlined-basic"
                    label="FirstNAme"
                    variant="outlined"
                  />
                  <TextField
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="outlined-basic"
                    label="LastNAme"
                    variant="outlined"
                  />
                </div>
                <div className="secondary">
                  <TextField
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                  />
                  <PatternFormat
                    value={phone}
                    className="nm"
                    onChange={(e) => setPhone(e.target.value)}
                    format="+998 ## ### ## ##"
                    allowEmptyFormatting
                    mask="_"
                  />
                </div>
                <div className="btm">
                  <div className="select">
                    <div className="check">
                      <h2>Select Method Of Payment</h2>
                      <div className="bank">
                        <div className="title">
                          <img src={card} alt="" />
                          <h3>Credit Card Or Debit</h3>
                        </div>
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="bank">
                        <div className="title">
                          <img src={paypal} alt="" />
                          <h3>Paypal</h3>
                        </div>
                        <input type="checkbox" name="" id="" />
                      </div>
                      <div className="bank">
                        <div className="title">
                          <img src={bank} alt="" />
                          <h3>Bank Transfer</h3>
                        </div>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </div>
                  </div>
                  <textarea></textarea>
                </div>
              </div>
              <Button onClick={handleOrder} variant="contained">
                Go to Payment
              </Button>
            </form>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
