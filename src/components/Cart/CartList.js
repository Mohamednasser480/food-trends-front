import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectAllCartItems } from "../../store/slices/cart";

const CartList = (props) => {
  const cartProducts = useSelector(selectAllCartItems);
  console.log(cartProducts);
  return cartProducts.map((cartProduct) => (
    <CartItem
      key={cartProduct._id}
      form={props.form}
      cartProduct={cartProduct}
    />
  ));
};

export default CartList;
