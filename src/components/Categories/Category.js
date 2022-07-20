import React from "react";
import { Link } from "react-router-dom";

export default function Category({ title, itemsNumber, imageSrc, navigateTo ,index}) {
  console.log(index)
  return (
    <div
      className="bg-infos group flex w-fit flex-col gap-4"
      data-aos="zoom-in-up"
      data-aos-delay={index*100}
    >
      <Link
        to={navigateTo}
        className="cursor-pointer overflow-hidden rounded-full border-8 border-white  ring-secondary-400  transition-all group-hover:ring-[3px]"
      >
        <img
          src={imageSrc}
          className="transition-all duration-500 group-hover:-rotate-2  group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <Link
          to={navigateTo}
          className="font-satoshi text-xl font-semibold transition-all hover:text-primary"
        >
          {title}
        </Link>
        <span className="font-satoshi text-sm font-semibold text-base-400">
          {itemsNumber} items
        </span>
      </div>
    </div>
  );
}
