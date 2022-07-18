import React from "react";
import { SectionTitle } from "../UI";
import { Product } from "./";
export default function FeatureProducts() {
  return (
    <div className="container py-14">
      <SectionTitle text={"Feature Products"} navigateTo={"/"} />
      
      <div className="py-6">
        <Product />
      </div>
    </div>
  );
}
