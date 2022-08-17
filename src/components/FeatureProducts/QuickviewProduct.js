import React from "react";
import { Slider, ProductDetails } from "../Product/index";
export default function QuickviewProduct({ productInfo }) {
  const outOfStock=productInfo.inStock<=0;
  // console.log(productInfo);
  return (
    <div className=" flex flex-wrap items-center justify-between">
      <Slider
        images={productInfo.images}
        className="hidden md:block md:w-5/12"
      />
      <ProductDetails
        product={productInfo}
        miny={true}
        className="w-full gap-2 md:!w-7/12"
        outOfStock={outOfStock}
      />
    </div>
  );
}
