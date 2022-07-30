import React from "react";
import { Slider, ProductDetails } from "../Product/index";
export default function QuickviewProduct(props) {
  console.log(props);
  return (
    <div className=" flex flex-wrap items-center justify-center">
      <Slider className="hidden md:block md:w-5/12" />
      <ProductDetails miny={true} className="w-full gap-2 md:w-7/12" />
    </div>
  );
}
