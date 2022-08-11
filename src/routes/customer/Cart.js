import React from "react";
import { Page, Loader, Alert } from "../../components/UI";
import { CartList, EmptyCart } from "../../components/Cart";
import { Button } from "../../components/UI";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCartItems,
  selectStatus,
  selectError,
  clearCartData,
} from "../../store/slices/cart";

const Cart = () => {
  const items = useSelector(selectAllCartItems);
  const cartStatus = useSelector(selectStatus);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const clearItemsHandler = () => {
    dispatch(clearCartData());
  };

  const content = {
    loading: <Loader />,
    error: (
      <Alert>
        <p>{error}</p>
      </Alert>
    ),
  };

  return (
    <Page title="cart">
      {content[cartStatus] ? content[cartStatus] : null}
      {items.length ? (
        <div className="mx-auto max-w-[68rem]">
          <div className="mb-5 overflow-x-auto rounded-lg border border-base-300">
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
            <Button
              to="/shop"
              className="bg-base-200 text-primary hover:bg-primary hover:text-white"
            >
              continue shopping
            </Button>
            <Button
              className="flex gap-x-3 bg-transparent text-black hover:text-primary"
              onClick={clearItemsHandler}
            >
              <RiDeleteBin6Line className="text-primary" size="18px" />
              clear cart
            </Button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Page>
  );
};

export default Cart;
