import React from "react";
import { Button, Typography } from "../UI";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FiltersSidebar from "./FiltersSidebar";
import { productsSelector } from "../../store/slices/products";
import { useSelector } from "react-redux";

export default function Controls() {
  const products = useSelector(productsSelector);

  const numberOfProducts = products?.length;
  const getSelectValue = (e) => {
    console.log(e.target.value);
  };
  const filters = [
    {
      text: "Default",
      value: 0,
    },
    {
      text: "Average Rating",
      value: 1,
    },
    {
      text: "Latest",
      value: 2,
    },
    {
      text: "Price: Low to High",
      value: 3,
    },
    {
      text: "Price: High to Low",
      value: 4,
    },
  ];

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-5 md:justify-between">
      <Typography component={"subtitle2"} className="text-center text-primary">
        We found
        <span className="mx-2 text-black">{numberOfProducts}</span>
        products available for you
      </Typography>
      
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="relative z-10 flex h-12 w-56 items-center rounded-md  bg-base-200">
          <select
            className="border-0.5 peer h-full w-full appearance-none border-0 bg-transparent px-5 font-medium transition-all duration-300 focus:bg-white"
            onChange={getSelectValue}
          >
            {filters.map((item) => (
              <option key={item.value} className="text-lg" value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
          <MdOutlineKeyboardArrowDown
            size={22}
            className="absolute right-3 -z-10 peer-focus:z-0"
          />
        </div>
        <FiltersSidebar />
      </div>
    </div>
  );
}
