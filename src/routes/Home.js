import React from "react";
import { Categories, Slider, Offers, SpecialOffer } from "../components";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Offers />
      <SpecialOffer />
    </div>
  );
};

export default Home;
