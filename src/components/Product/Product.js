import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  currentProductSelector,
  currentProductStatusSelector,
  getProductById,
} from "../../store/slices/products";
import { Breadcrumb, Loader } from "../UI";
import {
  ImageSection,
  ProductDetails,
  SimilarProducts,
  CustomerReviews,
} from "./index";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(currentProductSelector);
  const productStatus = useSelector(currentProductStatusSelector);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  const outOfStock = product?.inStock <= 0;

  // Scroll to Top on Page Load
  function ScrollToTop() {
    // console.log("Scrooled");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  useEffect(() => {
    ScrollToTop();
  }, [id]);
  
  return (
    <>
      <Breadcrumb product={product} />

      {productStatus == "Pending" ? (
        <Loader />
      ) : productStatus == "Fulfilled" ? (
        <div className=" mt-8 flex  flex-col flex-wrap justify-center gap-2">
          <div className="container flex  flex-wrap justify-center gap-2 pb-10">
            <ImageSection productImages={product.images} />
            <ProductDetails product={product} outOfStock={outOfStock} />
          </div>
          <SimilarProducts productCategory={product.category} id={id} />
          <CustomerReviews productId={id} />
        </div>
      ) : (
        "Error! Can't Fetch Page."
      )}
    </>
  );
}
