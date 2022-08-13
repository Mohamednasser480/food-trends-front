import React from "react";
import { useParams } from "react-router-dom";
import { AddProduct } from "./";
import { useSelector } from "react-redux";
import { vendorSelector } from "../../store/slices/vendor";

const ProductEdit = () => {
  const { id } = useParams();
  // console.log(id);
  const vendorProducts = useSelector(vendorSelector);
  const product = vendorProducts.find(
    (vendorProduct) => vendorProduct._id === id
  );
  return <AddProduct actionType="EDIT" {...product} />;
};

export default ProductEdit;
