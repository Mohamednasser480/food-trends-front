import React from "react";
import { AdsItem } from "./";

const Ads = () => {
  return (
    <div className="container flex flex-wrap justify-center gap-6 py-3">
      <AdsItem
        img={require("../../assets/ads-1.jpeg")}
        title="Juices are full of fruits"
        to="./shop"
      />
      <AdsItem
        img={require("../../assets/ads-2.jpeg")}
        title="fruits and veggies"
        to="./shop"
      />
    </div>
  );
};

export default Ads;
