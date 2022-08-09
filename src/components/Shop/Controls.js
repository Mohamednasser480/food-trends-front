import React from "react";
import { Button, Typography } from "../UI";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FiltersSidebar from "./FiltersSidebar";
import {
  filteredProductsSelector,
  getFilteredProducts,
} from "../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Controls() {
  const { category } = useParams();
  const products = useSelector(filteredProductsSelector);
  const dispatch = useDispatch();
  const numberOfProducts = products?.length;
  // Filters Login
  const onSelectValue = (e) => {
    const filterValue = e.target.value;
    const payload = { number: 5, filter: filterValue, category: category };
    dispatch(getFilteredProducts(payload));
  };
  // Filters Array
  const filters = [
    {
      text: "Default",
      value: "default",
    },
    {
      text: "Average Rating",
      value: "rating",
    },
    {
      text: "Latest",
      value: "latest",
    },
    {
      text: "Price: Low to High",
      value: "lowtohigh",
    },
    {
      text: "Price: High to Low",
      value: "hightolow",
    },
  ];

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-5 md:justify-between">
      <Typography
        component={"subtitle2"}
        className="text-center normal-case text-primary"
      >
        We found
        <span className="mx-2 text-black">{numberOfProducts}</span>
        products available for you
      </Typography>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="relative z-10 flex h-12 w-56 items-center rounded-md  bg-base-200">
          <select
            className="border-0.5 peer h-full w-full appearance-none border-0 bg-transparent px-5 font-medium transition-all duration-300 focus:bg-white"
            onChange={onSelectValue}
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
