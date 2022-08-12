import React, { useEffect } from "react";
import { DashboardPage, Loader } from "../../components/UI";
import { useDispatch, useSelector } from "react-redux";
import ProductsComponent from "./ProductsComponent";
import {
  changeSelector,
  fetchVendorProducts,
  vendorSelector,
  vendorStatusSelector,
} from "../../store/slices/vendor";
import { selectUserData } from "../../store/slices/auth";

const Products = () => {
  // get products using useEffect from redux products slice
  const { _id: id } = useSelector(selectUserData);
  const vendorData = useSelector(vendorSelector);
  const vendorStatus = useSelector(vendorStatusSelector);
  const updated = useSelector(changeSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVendorProducts(id));
  }, [dispatch, updated, id]);

  return (
    <DashboardPage title="products">
      {" "}
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
    </DashboardPage>
  );
};

export default Products;
