import React from "react";
import {
  Categories,
  Slider,
  Offers,
  SpecialOffer,
  FeatureProducts,
  Ads,
} from "../components";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Offers />
      <SpecialOffer />
      <FeatureProducts />
      <Ads />
    </div>
  );
};

export default Home;
