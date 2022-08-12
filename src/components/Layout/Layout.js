import React from "react";
import { CustomerLayout, VendorLayout, DeliveryLayout } from "./";
import { Error404 } from "../../routes";
import { Route } from "react-router-dom";
import { selectUserData } from "../../store/slices/auth";
import { useSelector } from "react-redux";

const userType = "vendor";

const defaultRoutes = (
  <>
    <Route path="*" element={<Error404 />} />;
  </>
);

const Layout = () => {
  // const userType = useSelector(selectUserData).userType || "customer";
  const layouts = {
    customer: <CustomerLayout>{defaultRoutes}</CustomerLayout>,
    vendor: <VendorLayout>{defaultRoutes}</VendorLayout>,
    delivery: <DeliveryLayout>{defaultRoutes}</DeliveryLayout>,
    // admin: <AdminLayout />,
  };
  return layouts[userType] ? layouts[userType] : layouts.customer;
};

export default Layout;
