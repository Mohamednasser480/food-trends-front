import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectAllCartItems } from "../../store/slices/cart";

const CartList = (props) => {
  const cartItems = useSelector(selectAllCartItems);
  return cartItems.map((cart, index) => (
    <CartItem key={cart.id} index={index} form={props.form} cartData={cart} />
  ));
};

export default CartList;
