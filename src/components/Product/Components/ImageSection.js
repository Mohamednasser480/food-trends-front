import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { ProductIcon } from "../../FeatureProducts";
import Slider from "./Slider";

export default function ImageSection() {
  return (
    <div className="relative w-full lg:w-5/12">
      <Slider />
      <div className="absolute top-10 right-10 z-10">
        <ProductIcon tooltip="Add to Wishlist">
          <AiOutlineStar size={25} className={"text-black transition-all"} />
        </ProductIcon>
      </div>
    </div>
  );
}
