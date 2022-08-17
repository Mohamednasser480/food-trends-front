import React from "react";
import { Link } from "react-router-dom";
import { ProductIcons } from ".";
import { ProductRating } from "../UI";
import OutOfStockBadge from "./OutOfStockBadge";

export default function Product({ productDetails, relative }) {
  let route = `${relative ? "/shop" : "shop"}/${productDetails._id}`;
  const outOfStock=productDetails?.inStock<=0;
  // const outOfStock=true;
  // 
  return (
    <div className="group flex  flex-col gap-3 ">
      <div className="relative overflow-hidden">
        <Link to={route} className=" bg-black">
          <img
            src={productDetails?.images?productDetails.images[0]:""}
            alt={productDetails?.productName}
            className="object-cover transition-all duration-1000 ease-out hover:scale-110 md:h-[300px] md:w-[300px] "
          />
        </Link>

        <ProductIcons
          className="absolute -bottom-16 flex w-full justify-center gap-3 py-4  px-8 transition-all  duration-300 group-hover:bottom-0 "
          productDetails={productDetails}
          outOfStock={outOfStock}
        />
      {outOfStock&&<OutOfStockBadge className={"absolute top-8 right-10"}/>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link
          to={route}
          className="font-satoshi text-lg font-semibold hover:text-primary capitalize"
        >
          {productDetails?.productName}
        </Link>
        <h4 className="font-satoshi text-lg font-extrabold text-primary">
          {productDetails?.price?.toFixed(2)} LE
        </h4>

        <div>
          <ProductRating
            rating={productDetails?.rate / productDetails?.numberOfReviews || 0}
          />
        </div>
      </div>

    </div>
  );
}
