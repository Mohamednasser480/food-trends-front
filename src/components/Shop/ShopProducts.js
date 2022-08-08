import React, { useEffect } from "react";
  import { useSelector, useDispatch } from "react-redux";
import {
  productsSelector,
  fetchProducts,
  productsStatusSelector,
} from "../../store/slices/products";
import { ProductItem } from "../FeatureProducts";
import { Loader } from "../UI";
export default function ShopProducts() {
  const products = useSelector(productsSelector);
  const productsLoading = useSelector(productsStatusSelector) == "Pending";
  const productsError = useSelector(productsStatusSelector) == "Rejected";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return productsLoading ? (
    <Loader />
  ) : productsError ? (
    "Can't Fetch Products!"
  ) : (
    <div className="flex flex-wrap gap-5 py-6 lg:gap-y-12 justify-center lg:justify-start">
      {products.map((prod) => (
        <ProductItem productDetails={prod} relative={true} />
      ))}
    </div>
  );
}
