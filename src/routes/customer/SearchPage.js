import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSearchResult,
  searchResultSelector,
  searchResultStatusSelector,
} from "../../store/slices/products";

import { ProductsLoader, Typography } from "../../components/UI";
import ProductItem from "../../components/FeatureProducts/ProductItem";

export default function SearchPage() {
  const searchResult = useSelector(searchResultSelector);
  const searchIsLoading = useSelector(searchResultStatusSelector) == "Pending";
  const searchError = useSelector(searchResultStatusSelector) == "Rejected";
  const dispatch = useDispatch();
  const { searchText } = useParams();
  useEffect(() => {
    dispatch(getSearchResult(searchText));
  }, [searchText]);
  return (
    <div className="container flex flex-col justify-center items-center">
      <Typography
        component={"h1"}
        className={"text-6xl tracking-normal text-primary md:text-7xl mt-4"}
      >
        Search Results of <span className="!text-secondary">{searchText}</span>
      </Typography>
      <div className="container flex min-h-[35vh] flex-wrap justify-center gap-x-6 p-6">
        {searchIsLoading ? (
          <ProductsLoader />
        ) : searchError ? (
          "Network Error!"
        ) : searchResult.length == 0 ? (
          "No Products Found!"
        ) : (
          searchResult.map((prod) => {
            return (
              <ProductItem
                key={prod._id}
                productDetails={prod}
                relative={true}
              />
            );
          })
        )}
      </div>
    </div>
  );
}