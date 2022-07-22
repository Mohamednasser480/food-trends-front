import React from "react";
import { CartTableRow } from "./";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { id, name, image, price, quantity, stock } = props.cartData;
  const dispatch = useDispatch();

  const updateCartItem = (quantity) => {
    const cartItem = {
      id,
      name,
      image,
      price,
      stock,
      quantity,
    };
    dispatch(cartActions.updateCartItem(cartItem));
  };

  const itemRemoveHandler = () => updateCartItem(0);

  const render = {
    table: (
      <CartTableRow
        cartData={props.cartData}
        onQuantityInput={updateCartItem}
        onItemRemove={itemRemoveHandler}
      />
    ),
    sidebar: <div></div>,
  };
  return render[props.shape] ? render[props.shape] : null;
};

export default CartItem;
