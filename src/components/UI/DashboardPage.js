import React from "react";
import { Typography } from "./";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";
import { useSelector } from "react-redux";
import { vendorSelector } from "../../store/slices/vendor";

const DashboardPage = (props) => {
  const { pathname } = useLocation();
  const products = useSelector(vendorSelector);
  const { id } = useParams();
  const isProductsPage = pathname.split("/")[1] == "products";
  const theProduct = products.find((el) => {
    return el._id == id;
  });
  return (
    <div className="flex flex-col gap-y-5">
      {pathname.split("/").length > 2 ? (
        <Breadcrumbs product={isProductsPage ? theProduct : ""} />
      ) : null}
      {props.title && (
        <Typography
          variant="h3"
          component="h1"
          className="text-center uppercase text-primary"
        >
          {props.title}
        </Typography>
      )}
      <div
        className={`rounded-xl bg-white p-5 shadow-md ${props.className || ""}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default DashboardPage;
