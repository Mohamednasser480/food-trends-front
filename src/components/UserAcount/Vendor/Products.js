import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getAllProducts,
} from "../../../store/slices/Vendor/VendorSlice";
import TabelComponent from "./TabelComponent";

export default function Products() {
  // get products using useEffect from redux products slice
  const productsData = useSelector(getAllProducts);
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
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {React.Children.toArray(
          productsData.map((pro) => {
            console.log(pro);
            return <TabelComponent {...pro} />;
          })
        )}
      </table>
    </div>
  );
}
