import React, { useState } from "react";
import { Button, Typography } from "../UI";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FiltersSidebar from "./FiltersSidebar";
import { FiltersBox, SelectBox } from "./";
import {
  filteredProductsSelector,
  getFilteredProducts,
} from "../../store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

export default function Controls() {
  const [showFilters, setShowFilters] = useState(false);

  const { category } = useParams();
  const navigate = useNavigate();
  const products = useSelector(filteredProductsSelector);
  const dispatch = useDispatch();
  const numberOfProducts = products?.length;
  // Filters Logic
  let [filtersValues, setFiltersValues] = useState({
    filterValue: "default",
    priceValue: "all",
  });
  function fetchItemsAfterFilter() {
    
    const payload = {
      number: 5,
      filter: filtersValues.filterValue,
      category: category,
      price: filtersValues.priceValue,
    };
    dispatch(getFilteredProducts(payload));
  }
  const onFilterChange = (e) => {
    filtersValues.filterValue = e.target.value;
    console.log(filtersValues)
    fetchItemsAfterFilter();
  };
  const onPriceChange = (e) => {
    filtersValues.priceValue = e.target.value;
    fetchItemsAfterFilter();
  };
  const onCategoryChange = (e) => {
    const value = e.target.value;
    value == "all"
      ? navigate(`/shop`)
      : navigate(`/categories/${e.target.value}`);
    fetchItemsAfterFilter();
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
  const categories = [
    {
      text: "All Categories",
      value: "all",
    },
    {
      text: "Fruits",
      value: "fruits",
    },
    {
      text: "Veggies",
      value: "veggies",
    },
    {
      text: "Meat",
      value: "meat",
    },
    {
      text: "Dairy",
      value: "dairy",
    },
  ];
  const prices = [
    {
      text: "All Prices",
      value: "all",
    },
    {
      text: "$0 - $30",
      value: [0, 30],
    },
    {
      text: "$30 - $60",
      value: [30, 60],
    },
    {
      text: "$60 - $90",
      value: [60, 90],
    },
    {
      text: "$90 - $120",
      value: [90, 120],
    },
    {
      text: "$120 +",
      value: [120, 99999999],
    },
  ];
  return (
    <div className="flex flex-col gap-5">
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
          <SelectBox array={filters} onSelectValue={onFilterChange} />
          {showFilters && (
            <>
              <SelectBox array={categories} onSelectValue={onCategoryChange} />
              <SelectBox array={prices} onSelectValue={onPriceChange} />
            </>
          )}

          <Button
            variant="primary"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
