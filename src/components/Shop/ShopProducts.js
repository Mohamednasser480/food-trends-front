import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  filteredProductsSelector,
  getFilteredProducts,
  filteredProductsStatusSelector,
} from "../../store/slices/products";
import { ProductItem } from "../FeatureProducts";
import { Loader } from "../UI";
export default function ShopProducts() {
  const { category } = useParams();
  const products = useSelector(filteredProductsSelector);
  const productsLoading =
    useSelector(filteredProductsStatusSelector) == "Pending";
  const productsError =
    useSelector(filteredProductsStatusSelector) == "Rejected";

  const dispatch = useDispatch();
  useEffect(() => {
    const payload = { number: null, filter: "default", category: category };
    dispatch(getFilteredProducts(payload));
  }, []);
  return productsLoading ? (
    <Loader />
  ) : productsError ? (
    "Can't Fetch Products!"
  ) : (
    <div className="flex flex-wrap justify-center gap-5 py-6 lg:justify-start lg:gap-y-12">
      {products.map((prod) => (
        <ProductItem productDetails={prod} relative={true} />
      ))}
    </div>
  );
}
