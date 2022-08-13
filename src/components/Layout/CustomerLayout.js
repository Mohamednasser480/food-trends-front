import React, { useEffect } from "react";
import { Footer, ScrollUp, Topbar } from "./";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Cart,
  Categories,
  ContactUs,
  Home,
  PaymentStatus,
  ProductPage,
  SearchPage,
  Shop,
  UserAccount,
} from "../../routes/customer";
import DeliveryRegister from "../Auth/DeliveryRegister";
import Wishlist from "../UserAccount/Wishlist";
import { fetchCartData } from "../../store/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../../store/slices/auth";

const CustomerLayout = (props) => {
  const dispatch = useDispatch();
  const userStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch, userStatus]);

  return (
    <div className="flex min-h-screen  flex-col">
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
          <Route path="/payment" element={<PaymentStatus />} />
          <Route path="/register/delivery" element={<DeliveryRegister />} />
          {props.children}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
