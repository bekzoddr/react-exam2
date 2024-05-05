import React, { memo } from "react";
import image from "../../assets/images/nav__logo.svg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import brands from "../../assets/images/Brands.png";
function Footer() {
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="wrapper">
          <img src={image} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the industry's
            standard <br /> dummy text ever.Since the 1500s, when <br /> an
            unknown printer.
          </p>
        </div>
        <div className="wrapper">
          <h2>Follow Us</h2>
          <p>
            Since the 1500s, when an unknown <br /> printer took a galley of
            type and <br />
            scrambled.
          </p>
          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
        <div className="wrapper">
          <h2>Contact Us</h2>
          <p>
            E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
          </p>
        </div>
      </div>
      <div className="footer__links">
        <div className="wrapper">
          <h2>Information</h2>
          <p>
            About Us <br />
            Infomation <br /> Privacy Policy <br /> Terms & Conditions
          </p>
        </div>
        <div className="wrapper">
          <h2>Service</h2>
          <p>
            About Us <br />
            Infomation <br /> Privacy Policy <br /> Terms & Conditions
          </p>{" "}
        </div>
        <div className="wrapper">
          <h2>My Account</h2>
          <p>
            About Us <br />
            Infomation <br /> Privacy Policy <br /> Terms & Conditions
          </p>{" "}
        </div>
        <div className="wrapper">
          <h2>Our Offers</h2>
          <p>
            About Us <br />
            Infomation <br /> Privacy Policy <br /> Terms & Conditions
          </p>{" "}
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="footer__copyright">
        <img src={brands} alt="" />
      </div>
    </footer>
  );
}

export default memo(Footer);
