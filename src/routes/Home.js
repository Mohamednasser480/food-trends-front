import React from "react";
import {Categories,Slider,Offers,FeatureProducts} from "../components"

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Offers/>
      
      <FeatureProducts/>
    </div>
  );
};

export default Home;
