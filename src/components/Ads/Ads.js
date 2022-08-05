import React from "react";
import { AdsItem } from "./";

const Ads = () => {
  return (
    <div className="container hidden w-full flex-col gap-6 pb-24 sm:flex lg:flex-row">
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
