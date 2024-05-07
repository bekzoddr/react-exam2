import React, { memo } from "react";
import HeroCards from "../heroCards/HeroCards";
import { Container } from "@mui/material";
function Hero() {
  return (
    <>
      <div className="hero">
        <Container maxWidth="xl">
          <h1 className="container">
            Super Flash Sale <br /> 50% Off
          </h1>
        </Container>
      </div>
      <HeroCards />
    </>
  );
}

export default memo(Hero);

// import React, { memo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleToWishes } from "../../context/wishlistSlice";
// import { GrCart } from "react-icons/gr";
// import { MdOutlineStar } from "react-icons/md";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import Loading from "../loading/Loading";
// import { Container } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useGetProductQuery } from "../../context/productApi";

// function Products({ title }) {
//   const dispatch = useDispatch();
//   const wishes = useSelector((state) => state.wishlist.value);
//   const cart = useSelector((state) => state.cart.value);
//   const { data, isLoading, isError } = useGetProductQuery();

//   if (isLoading) {
//     return <Loading />;
//   }

//   if (isError) {
//     return <div>Error fetching data...</div>;
//   }

//   let products = data?.map((el) => (
//     <div key={el.id} className="card">
//       <div className="image-container">
//         <img src={el.image} alt="Product" className="image" />
//         <div className="navigation">
//           <button onClick={() => dispatch(toggleToWishes(el))}>
//             {wishes.some((w) => w.id === el.id) ? (
//               <FaHeart className="likes" />
//             ) : (
//               <FaRegHeart className="likes" />
//             )}
//           </button>
//           <button>
//             <GrCart />
//           </button>
//         </div>
//       </div>
//       <div className="card__body">
//         <Link to={`/single/${el.id}`}>
//           <h2>{el.title}</h2>
//         </Link>

//         <div className="rating">
//           {[...Array(5)].map((_, index) => (
//             <MdOutlineStar key={index} />
//           ))}
//         </div>
//         <div className="prices">
//           <h2 className="price">${el.price}</h2>
//           <div className="count">
//             <h4 className="old__price">$534.33</h4>
//             <h4>24% Off</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
// <Container maxWidth="xl">
// <div className="product__title container">
//   <h1>{title}</h1>
//   <br />
//   <ul>
//     <li>All</li>
//     <li>Bags</li>
//     <li>Sneakers</li>
//     <li>Belt</li>
//     <li>Sunglasses</li>
//   </ul>
//   <br />
// </div>
//       <div className="products container">{products}</div>
//     </Container>
//   );
// }

// export default memo(Products);
