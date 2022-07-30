import React from "react";
import { ProductRating } from "../../UI";
export default function ReviewItem(props) {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-4 border-b-[1px] py-3 md:flex-row md:gap-2">
      <div className="flex  items-center gap-3">
        <div className="overflow-hidden rounded-full">
          <img src={props.image} width={"50px"} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wider">
            {props.userName}
          </span>
          <span>
            <ProductRating rating={props.rating} className="gap-0.5" />
          </span>
        </div>
      </div>
      <div className="ml-2 flex  flex-col gap-1 lg:ml-0 lg:w-10/12 ">
        <div className="text-md flex flex-wrap items-center justify-between font-semibold uppercase tracking-wider">
          {props.reviewTitle}
          <span className="text-sm font-medium text-base-400">
            {props.date}
          </span>
        </div>
        <p className="text-base-400">{props.reviewBody}</p>
      </div>
    </div>
  );
}
