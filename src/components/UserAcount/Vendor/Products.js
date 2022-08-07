import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productsSelector,
} from "../../../store/slices/products";
import ProductsComponent from "./ProductsComponent";

export default function Products() {
  // get products using useEffect from redux products slice
  const productsData = useSelector(productsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // get table comp from daisy ui
  return (
    <div className=" container overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {React.Children.toArray(
          productsData.map((pro) => {
            return <ProductsComponent {...pro} />;
          })
        )}
      </table>
    </div>
  );
}
