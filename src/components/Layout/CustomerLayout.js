import React from "react";
import { Footer, ScrollUp, Topbar } from "./";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Cart,
  Categories,
  ContactUs,
  Home,
  ProductPage,
  SearchPage,
  Shop,
  UserAccount,
} from "../../routes/customer";
import { Wishlist } from "../UserAccount";

const CustomerLayout = (props) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <ScrollUp />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/categories/" element={<Categories />} />
          <Route path="/categories/:category" element={<Shop />} />
          <Route path="/search/:searchText" element={<SearchPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {props.children}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default CustomerLayout;
