import React from "react";
import {
  Categories,
  Slider,
  Offers,
  SpecialOffer,
  FeatureProducts,
  Ads,
  FreshSection,
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
      <FreshSection />
      <Ratings />
    </div>
  );
};

export default Home;
