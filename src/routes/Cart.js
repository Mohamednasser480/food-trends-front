import React from "react";
import { Page } from "../components/UI";
import { CartList, EmptyCart } from "../components/Cart";
import { Button } from "../components/UI";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cart";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const clearItemsHandler = () => {
    dispatch(cartActions.replaceItems([]));
  };

  return (
    <Page title="cart">
      {items.length ? (
        <>
          <div className="overflow-x-auto mb-5 max-w-[68rem] mx-auto border border-base-300 rounded-lg">
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
                <CartList />
              </tbody>
            </table>
          </div>
          <div className="flex gap-6 flex-wrap">
            <Button className="text-primary bg-base-200 hover:bg-primary hover:text-white">
              continue shopping
            </Button>
            <Button
              className="text-black bg-transparent hover:text-primary flex gap-x-3"
              onClick={clearItemsHandler}
            >
              <RiDeleteBin6Line className="text-primary" size="18px" />
              clear cart
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </Page>
  );
};

export default Cart;
