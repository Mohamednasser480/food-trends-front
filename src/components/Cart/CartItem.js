import React from "react";
import { CartTableRow } from "./";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/slices/cart";

const CartItem = (props) => {
  const { _id } = props.cartProduct;
  const dispatch = useDispatch();

  const itemRemoveHandler = (productId) => dispatch(deleteCartItem(productId));
  const quantitySubmitHandler = (quantity) => {
    console.log(_id, quantity);
    dispatch(updateCartItem({ product: _id, quantity }));
  };

  const render = {
    table: (
      <CartTableRow
        cartProduct={props.cartProduct}
        onQuantitySubmit={quantitySubmitHandler}
        onItemRemove={itemRemoveHandler}
      />
    ),
    sidebar: <li></li>,
  };
  return render[props.form] ? render[props.form] : null;
};

export default CartItem;
