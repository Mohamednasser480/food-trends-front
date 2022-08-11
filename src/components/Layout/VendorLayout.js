import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  AccountSettings,
  Reviews,
  ReviewDetail,
  AddProduct,
} from "../../routes/vendor";

const VendorLayout = (props) => {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<AddProduct />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          {props.children}
        </Routes>
      </main>
    </>
  );
};

export default VendorLayout;
