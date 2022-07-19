import React from "react";
import {
  Categories,
  Slider,
  Offers,
  SpecialOffer,
  FeatureProducts,
} from "../components";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Offers />
      <SpecialOffer />
      <FeatureProducts />
    </div>
  );
};

export default Home;
