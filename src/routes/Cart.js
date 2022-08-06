import React, { useEffect, useState } from "react";
import { Page } from "../components/UI";
import { CartList, EmptyCart } from "../components/Cart";
import { Button } from "../components/UI";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  saveCartItems,
  updateCartItems,
  selectAllCartItems,
  selectStatus,
  selectError,
} from "../store/slices/cart";

const Cart = () => {
  const items = useSelector(selectAllCartItems);
  const cartItemsStatus = useSelector(selectStatus);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [postCartStatus, setPostCartStatus] = useState("idle");

  useEffect(() => {
    if (cartItemsStatus === "idle") {
      dispatch(fetchCartItems());
    }
  }, [cartItemsStatus, dispatch]);

  const clearItemsHandler = () => {
    dispatch(updateCartItems([]));
  };

  const updateCartHandler = () => {};

  const content = {
    loading: <p>Loading...</p>,
    succeeded: items.length ? (
      <>
        <div className="mx-auto mb-5 max-w-[68rem] overflow-x-auto rounded-lg border border-base-300">
          <table className="table w-full">
            <thead>
              <tr>
                <th>product</th>
                <th>quantity</th>
                <th>price</th>
                <th>subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <CartList form="table" />
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-6">
          <Button className="bg-base-200 text-primary hover:bg-primary hover:text-white">
            continue shopping
          </Button>
          <Button
            className="flex gap-x-3 bg-transparent text-black hover:text-primary"
            onClick={clearItemsHandler}
          >
            <RiDeleteBin6Line className="text-primary" size="18px" />
            clear cart
          </Button>
          <Button
            variant="primary"
            className="flex gap-x-3"
            onClick={updateCartHandler}
          >
            update cart
          </Button>
        </div>
      </>
    ) : (
      <EmptyCart />
    ),
    failed: <p>{error}</p>,
  };

  return <Page title="cart">{content[cartItemsStatus]}</Page>;
};

export default Cart;
