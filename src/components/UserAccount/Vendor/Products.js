import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productsSelector,
  productsStatusSelector,
} from "../../../store/slices/products";
import ProductsComponent from "./ProductsComponent";
import { Loader } from "../../UI";
import { vendorStatusSelector } from "../../../store/slices/vendor";

export default function Products() {
  // get products using useEffect from redux products slice
  const productsData = useSelector(productsSelector);
  const productsStatus = useSelector(productsStatusSelector);
  const deleteStatus = useSelector(vendorStatusSelector);
  const updateStatus = useSelector(vendorStatusSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, deleteStatus, updateStatus]);

  // get table comp from daisy ui
  return (
    <div className=" container overflow-x-auto">
      {(deleteStatus || productsStatus) === "Pending" ? <Loader /> : null}
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
