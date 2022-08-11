import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsComponent from "./ProductsComponent";
import { Loader } from "../../UI";
import {
  changeSelector,
  fetchVendorProducts,
  vendorSelector,
  vendorStatusSelector,
} from "../../../store/slices/vendor";
import { selectUserData } from "../../../store/slices/auth";

export default function Products() {
  // get products using useEffect from redux products slice
  const { _id: id } = useSelector(selectUserData);
  const vendorData = useSelector(vendorSelector);
  const vendorStatus = useSelector(vendorStatusSelector);
  const updated = useSelector(changeSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVendorProducts(id));
  }, [dispatch, updated, id]);

  // get table comp from daisy ui
  return (
    <div className=" container overflow-x-auto">
      {vendorStatus === "Pending" ? <Loader /> : null}
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
          vendorData.map((pro) => {
            return <ProductsComponent {...pro} />;
          })
        )}
      </table>
    </div>
  );
}
