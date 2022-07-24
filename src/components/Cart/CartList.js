import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartData = useSelector((state) => state.cart.items);
  return cartData.map((cart, index) => (
    <CartItem key={cart.id} index={index} shape="table" cartData={cart} />
  ));
};

export default CartList;
