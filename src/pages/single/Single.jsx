import React, { memo, useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "../../api";
import mainUrl from "../../api";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import Products from "../../components/products/Products";
import { toggleToWishes } from "../../context/wishlistSlice";
import { decCart, incCart } from "../../context/cartSlice";
import Loading from "../../components/loading/Loading";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function SingleRoute({ data }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  const imageSeeds = [1, 2, 3, 4];

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="links">
        <Link to={"/"}>Home</Link>/<h4>{product?.category}</h4>/
        <h4>{product?.title}</h4>
      </div>
      <br />
      <br />
      <br />
      <div className="single__page containerr">
        <div className="productImages">
          <img width={375} height={300} src={product?.image} alt="" />
          <div className="bottom__images">
            {imageSeeds.map((seed) => (
              <img
                width={85}
                height={85}
                key={seed}
                src={`https://picsum.photos/seed/${seed}/350`}
                alt={`Image ${seed}`}
              />
            ))}
          </div>
        </div>
        <div className="product__data">
          <h2>{product?.title}</h2>
          <div className="reviews">
            {[...Array(4)].map((_, index) => (
              <IoStarSharp className="star" key={index} />
            ))}
            <IoStarSharp />
            <p>0 reviews</p>
            <p className="sub">Submit a review</p>
          </div>
          <br />
          <hr />
          <br />
          <div className="prices">
            <h2>${product?.price}</h2>
            <h3>$534,33</h3>
            <h4>24% Off</h4>
          </div>
          <div className="infos">
            <ul className="first">
              <li>Availability:</li>
              <li>Category:</li>
              <li>Free shipping</li>
            </ul>
            <ul>
              <li>In stock</li>
              <li>Accessories</li>
            </ul>
          </div>
          <br />
          <hr />
          <br />
          <div className="color">
            <h3>Select Color:</h3>
            <div className="colors">
              <div className="blue"></div>
              <div className="red"></div>
              <div className="black"></div>
              <div className="yellow"></div>
            </div>
          </div>
          <div className="size">
            <h3>Size</h3>
            <select name="" id="">
              <option value="size">Size</option>
              <option value="1">XS</option>
              <option value="2">L</option>
              <option value="3">2XL</option>
              <option value="4">M</option>
            </select>
          </div>
          <br />
          <hr />
          <br />
          <div className="buttons">
            <div className="counter">
              <button>+</button>
              <h2 className="text">2</h2>
              <button>-</button>
            </div>
            <div className="navigations">
              <button>
                <RiShoppingCart2Line /> Add to cart
              </button>
              <button>
                <FaRegHeart />
              </button>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="social-media">
            <button className="facebook">
              <FaFacebookF className="icon" />
              <h4>Share on Facebook</h4>
            </button>
            <button className="twitter">
              <FaTwitter className="icon" />
              <h4>Share on Twitter</h4>
            </button>
          </div>
        </div>
        <div className="products">
          <div className="card">
            <div className="image-container">
              <img
                src={`https://picsum.photos/200`}
                alt="Product"
                className="image"
              />
              <div className="navigation">
                <button>
                  <FaHeart className="likes" />
                </button>
              </div>
            </div>
            <div className="card__body">
              <h2>{product?.title}</h2>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <div className="prices">
                <h2 className="price">${product?.price}</h2>
                <div className="count">
                  <h4 className="old__price">$534.33</h4>
                  <h4>24% Off</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleRoute;
