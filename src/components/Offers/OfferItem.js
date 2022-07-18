import React from "react";
import { Button, Typography } from "../UI";
export default function OfferItem({ title, offer, image,navigateTo }) {
  return (
    <div
      className={`group  relative min-h-[600px]  w-full`}
    >
      <div className="flex flex-col items-center absolute z-10 left-1/2 -translate-x-1/2 w-full py-14">
        <h3 className="text-md mb-4 font-satoshi font-bold text-secondary group-hover:text-xl transition-all duration-500">
          {offer}
        </h3>

        <Typography
          component={"h1"}
          className={"text-center !text-5xl !tracking-normal text-primary"}
        >
          {title}
        </Typography>
        <Button
          variant="secondary"
          className="mt-5 !px-3 !tracking-normal !min-h-6 !h-10 text-white transition-all duration-700 group-hover:bg-black"
          to={navigateTo}
        >
          Shop now
        </Button>
      </div>
      <div className="absolute -top-0 left-0  h-full w-full overflow-hidden">
        <img src={image} className="object-cover h-full w-full group-hover:scale-110 object-center transition-all duration-700 	"/>
      </div>
    </div>
  );
}
