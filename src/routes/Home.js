import React from "react";
import {
  Categories,
  Slider,
  Offers,
  SpecialOffer,
  FeatureProducts,
  Ads,
  Ratings,
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
      <Ratings />
    </div>
  );
};

export default Home;
