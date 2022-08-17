import React from "react";
import { CartTableRow } from "./";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/slices/cart";
import CartSidebarItem from "./CartSidebarItem";

const CartItem = (props) => {
  const { _id } = props.cartProduct;
  const dispatch = useDispatch();

  const itemRemoveHandler = () => dispatch(deleteCartItem(_id));
  const quantitySubmitHandler = (quantity) => {
    // console.log(_id, quantity);
    dispatch(updateCartItem({ _id, quantity }));
  };

  const render = {
    table: (
      <CartTableRow
        cartProduct={props.cartProduct}
        onQuantitySubmit={quantitySubmitHandler}
        onItemRemove={itemRemoveHandler}
      />
    ),
    sidebar: (
      <CartSidebarItem
        cartProduct={props.cartProduct}
        onQuantitySubmit={quantitySubmitHandler}
        onItemRemove={itemRemoveHandler}
      />
    ),
  };
  return render[props.form] ? render[props.form] : null;
};

export default CartItem;
