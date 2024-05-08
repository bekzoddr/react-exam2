import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import axios from "../../api";
import Products from "../../components/products/Products";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "../../components/skeleton/Skeleton"; // Update the path to your Skeleton component
import Section from "../../components/section/Section";
import HomeItems from "../../components/homeItems/HomeItems";

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const category = ["All", "Bags", "Bags", "Sneakers", "Belt", "Sunglasses"];
  const categoryItems = category?.map((el, inx) => <li key={inx}>{el}</li>);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products?limit=${count}`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [count]);

  return (
    <div>
      <Hero />
      {loading ? (
        <Skeleton count={4} />
      ) : (
        <Products title="BEST SELLER" categorys={categoryItems} data={data} />
      )}
      <div className="loader__btn container">
        <Button variant="outlined" onClick={() => setCount((p) => p + 4)}>
          {loading ? <CircularProgress size={24} /> : "See more"}
        </Button>
      </div>
      <Section />
      <br />
      <br />
      <HomeItems />
    </div>
  );
};

export default Home;
