import React from "react";
import {Categories,Slider,Offers} from "../components"

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Offers/>
    </div>
  );
};

export default Home;
