import React from "react";
import { ImageSection, ProductDetails } from "./index";
export default function Product({ id }) {
  // Fetch Item Here and send each Details to Components
  return (
    <div className="container flex flex-wrap justify-center gap-2 py-4">
      <ImageSection />
      <ProductDetails />
    </div>
  );
}
