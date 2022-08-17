import React from "react";
import { Button, Typography } from "../UI";
export default function OfferItem({ title, offer, image, navigateTo, index }) {
  return (
    <div
      className={`group  relative min-h-[600px]  w-full`}
      data-aos="fade-up"
      data-aos-delay={index * 300}
    >
      <div className="absolute left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center py-14">
        <h3 className="text-md mb-4 font-satoshi font-bold text-secondary transition-all duration-500 group-hover:text-xl">
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
          className="!min-h-6 mt-5 !h-10 !px-3 !tracking-normal text-white transition-all duration-700 group-hover:bg-black"
          to={navigateTo}
        >
          Shop now
        </Button>
      </div>
      <div className="absolute -top-0 left-0  h-full w-full overflow-hidden">
        <img
          src={image}
          alt={`Offer: ${offer}`}
          className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110 	"
        />
      </div>
    </div>
  );
}
