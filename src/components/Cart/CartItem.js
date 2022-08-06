import React from "react";
import { CartTableRow } from "./";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  deleteCartItem,
  updateCartItem,
} from "../../store/slices/cart";

const CartItem = (props) => {
  const { id } = props.cartData;
  const dispatch = useDispatch();

  const itemRemoveHandler = (id) => dispatch(deleteCartItem(id));
  const quantityInputHandler = (quantity) => {
    dispatch(updateCartItem(id, quantity));
  };

  const render = {
    table: (
      <CartTableRow
        cartData={props.cartData}
        onQuantityInput={quantityInputHandler}
        onItemRemove={itemRemoveHandler}
      />
    ),
    sidebar: <div></div>,
  };
  return render[props.form] ? render[props.form] : null;
};

export default CartItem;
