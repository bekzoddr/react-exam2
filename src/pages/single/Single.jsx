import React, { memo, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "../../api";
import mainUrl from "../../api";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Products from "../../components/products/Products";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { decCart, incCart } from "../../context/cartSlice";
import Loading from "../../components/loading/Loading";
function SingleRoute({ data }) {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
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
  return <div className="single__page"></div>;
}

export default SingleRoute;
