import React from "react";
import CategoriesSection from "../../components/Categories";
import { Breadcrumb } from "../../components/UI";
export default function Categories() {
  return (
    <div>
      <Breadcrumb />
      <CategoriesSection subtitle={true} title="Our Categories" />
    </div>
  );
}
