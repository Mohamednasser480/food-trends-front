import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { ProductIcon } from "../../FeatureProducts";
import Slider from "./Slider";

export default function ImageSection() {
  return (
    <div className="w-full lg:w-1/2 relative">
      <Slider />
      <div className="absolute top-24 right-12 z-10">
        <ProductIcon tooltip="Add to Wishlist">
          <AiOutlineStar size={25} className={"text-black transition-all"} />
        </ProductIcon>
      </div>
    </div>
  );
}
