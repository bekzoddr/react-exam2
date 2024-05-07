import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import axios from "../../api";
import Products from "../../components/products/Products";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Hero />
      <Products data={data} />
    </div>
  );
};

export default Home;
