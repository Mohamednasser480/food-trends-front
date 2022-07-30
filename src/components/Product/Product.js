import React, { useEffect } from "react";
import {
  ImageSection,
  ProductDetails,
  SimilarProducts,
  CustomerReviews,
} from "./index";

export default function Product({ id }) {
  // Fetch Item Here and send each Details to Components

  // Scroll to Top on Page Load
  function ScrollToTop() {
    console.log("Scrooled");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  ScrollToTop();

  return (
    <div className=" flex flex-col  flex-wrap justify-center gap-2 ">
      <div className="container flex   flex-wrap justify-center gap-2 pb-10">
        <ImageSection />
        <ProductDetails />
      </div>

      <SimilarProducts />

      <CustomerReviews />
    </div>
  );
}
