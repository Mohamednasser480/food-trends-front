import React, { useEffect, useRef, useState } from "react";
import { Button, Typography } from "../UI";
import { SelectBox } from "./";
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
  function fetchItemsAfterFilter(filters) {
    const payload = {
      number: 5,
      ...filters,
    };
    // console.log(payload);
    dispatch(getFilteredProducts(payload));
  }
  const genericFilters = useRef("all");
  const categoriesFilter = useRef(category);
  const pricesFilter = useRef("all");

  let filters = {
    filter: genericFilters.current.value,
    category: category||"all",
    price: pricesFilter.current.value,
  };
  // console.log(filters)
  const onSelectBoxChange = () => {
    filters = {
      filter: genericFilters.current.value,
      category: category,
      price: pricesFilter.current.value,
    };
    // console.log("Filters", filters);
    fetchItemsAfterFilter(filters);
  };
  const onCategoryChange = (e) => {
    const value = e.target.value;
    filters.category = value;
    navigate(`/categories/${e.target.value}`);
  };

  // Filters Array
  const genericFiltersArray = [
    {
      text: "Default",
      value: "all",
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
  const categoriesArray = [
    {
      text: "All Categories",
      value: "all",
    },
    {
      text: "Fruits",
      value: "fruits",
    },
    {
      text: "Juices",
      value: "juices",
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
  const pricesArray = [
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
  useEffect(() => {
    if (!category) return;
    categoriesFilter.current.value = category.toLowerCase();
  }, [category]);

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
          <SelectBox
            array={genericFiltersArray}
            ref={genericFilters}
            onChange={onSelectBoxChange}
          />
          <>
            <SelectBox
              array={categoriesArray}
              ref={categoriesFilter}
              onChange={onCategoryChange}
            />
            <SelectBox
              array={pricesArray}
              ref={pricesFilter}
              onChange={onSelectBoxChange}
            />
          </>

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
