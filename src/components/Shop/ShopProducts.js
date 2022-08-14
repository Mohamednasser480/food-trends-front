import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  filteredProductsSelector,
  getFilteredProducts,
  filteredProductsStatusSelector,
  filteredProductsCount,
  filterArraySelector,
  getFilteredProductsWhilePagination,
  productsPageNumber,
} from "../../store/slices/products";
import { ProductItem } from "../FeatureProducts";
import { Loader } from "../UI";
import Pagination from "../UI/Pagination";
export default function ShopProducts() {
  const dispatch = useDispatch();
  const currentPage = useSelector(productsPageNumber);

  const { category } = useParams();
  const products = useSelector(filteredProductsSelector);
  const productsLoading =
    useSelector(filteredProductsStatusSelector) === "Pending";
  const productsError =
    useSelector(filteredProductsStatusSelector) === "Rejected";
  const numberOfProducts = useSelector(filteredProductsCount);
  const filterArray = useSelector(filterArraySelector);

  useEffect(() => {
    if (category) {
      let payload = {
        ...filterArray,
        category: category || "all",
      };

      dispatch(getFilteredProducts(payload));
    } else {
      let payload = {
        filter: "all",
        category: "all",
        price: "all",
      };
      dispatch(getFilteredProducts(payload));
    }
  }, [category]);

  const changeProductsPerPage = (pageNumber) => {
    dispatch(getFilteredProductsWhilePagination(pageNumber));
  };

  return productsLoading ? (
    <Loader />
  ) : productsError ? (
    "Can't Fetch Products!"
  ) : (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center gap-5 py-6  lg:gap-y-12">
        {products.map((prod, index) => (
          <ProductItem productDetails={prod} relative={true} key={index} />
        ))}
      </div>
      <Pagination
        allProducts={numberOfProducts}
        onPageChange={changeProductsPerPage}
        currentPage={currentPage}
        numberOfItems={numberOfProducts}
      />
    </section>
  );
}
