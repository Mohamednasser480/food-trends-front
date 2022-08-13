import React, { useEffect, useState } from "react";
import { Page, Loader, Alert } from "../../components/UI";
import { CartList, EmptyCart } from "../../components/Cart";
import { Button } from "../../components/UI";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCartItems,
  selectStatus,
  selectError,
  clearCartData,
  selectCartID,
} from "../../store/slices/cart";
import { loginSelector } from "../../store/slices/auth";
import { doPayment, paymentSelector } from "../../store/slices/payment";
const Cart = () => {
  const items = useSelector(selectAllCartItems);
  const cartStatus = useSelector(selectStatus);
  const error = useSelector(selectError);
  const payment = useSelector(paymentSelector);
  const dispatch = useDispatch();
  const cartId = useSelector(selectCartID);
  const loginStatus = useSelector(loginSelector);
  const [guestShowLogin,setGuestShowLogin]=useState(false);
  const clearItemsHandler = () => {
    dispatch(clearCartData());
  };
  const checkoutHandler = () => {
    if (loginStatus.status == "succeeded") {
      dispatch(doPayment(cartId));
    }else{
      setGuestShowLogin(true)
    }
  };
  const content = {
    loading: <Loader />,
    error: (
      <Alert>
        <p>{error}</p>
      </Alert>
    ),
  };

  const navigateToPaymentPage = () => {
    window.location.href = payment.paymentLink;
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
          <div className="flex flex-wrap items-center gap-6">
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
            <Button
              className="hover:text- flex gap-x-3 !bg-primary text-white hover:opacity-90"
              onClick={checkoutHandler}
            >
              <FaMoneyCheck
                className="text-white group-hover:text-primary"
                size="18px"
              />
              Checkout
            </Button>

            {payment.isLoading ? (
              <Loader />
            ) : payment.paymentLink ? (
              navigateToPaymentPage()
            ) : (
              ""
            )}
            {payment.error && (
              <p className="text-lg font-medium text-red-500">
                Error During Checkout! Please try again.
              </p>
            )}
            {guestShowLogin && (
              <p className="text-lg font-medium text-primary">
                Please Login Before Checkout
              </p>
            )}
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Page>
  );
};

export default Cart;
