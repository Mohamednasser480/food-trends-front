import React from "react";
import { CartTableRow } from "./";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/slices/cart";

const CartItem = (props) => {
  const { _id } = props.cartProduct;
  const dispatch = useDispatch();

  const itemRemoveHandler = (productId) => dispatch(deleteCartItem(productId));
  const quantityInputHandler = (quantity) => {
    dispatch(updateCartItem(_id, quantity));
  };

  const render = {
    table: (
      <CartTableRow
        cartProduct={props.cartProduct}
        onQuantityInput={quantityInputHandler}
        onItemRemove={itemRemoveHandler}
      />
    ),
    sidebar: <li></li>,
  };
  return render[props.form] ? render[props.form] : null;
};

export default CartItem;
