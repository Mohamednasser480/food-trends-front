import React, { useEffect, useState } from "react";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/UI";
import { useDispatch, useSelector } from "react-redux";
import {  saveOrder } from "../../store/slices/orders";
import { selectAllCartItems, selectTotalPrice } from "../../store/slices/cart";
let flag = false;
export default function PaymentStatus() {
  let [paymentSuccess, setPaymentSuccess] = useState(false);
  const [queryParams, setQueryParams] = useSearchParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const status = queryParams.get("success");
  function paymentSuccessful() {
    if (status == "true") {
      setPaymentSuccess(true);
    } else if (status == "false") {
      setPaymentSuccess(false);
    }
  }
  function prepareCartItemsForPayment(items) {
    const preparedItems = items.map((el) => {
      return { product: el._id, quantity: el.quantity };
    });
    // console.log(preparedItems);
    return preparedItems;
  }
  useEffect(() => {
    paymentSuccessful();
    // Send Order To DB IF Payment Success

    if (status == "true" && !flag && cartItems.length > 0) {
      const preparedItems = prepareCartItemsForPayment(cartItems);
      // console.log(preparedItems)
      dispatch(saveOrder({ items: preparedItems, totalPrice: totalPrice }));
      
      flag = true;
      // Clear Cart Items Here
    }
  }, [cartItems]);

  const render = {
    successfull: (
      <>
        <div className="hidden lg:flex" data-aos="fade-left">
          <img
            src={require("../../assets/Successfull Payment.png")}
            alt="Successfull Payment"
            width={400}
          />
        </div>
        <div
          className="flex flex-col  items-center justify-center gap-6 text-center"
          data-aos="fade-right"
        >
          <BsCheckCircle size={100} className="mx-auto text-primary" />
          <div className="flex flex-col flex-wrap gap-2">
            <h3 className="text-2xl font-medium">
              Thank you for your purchase!
            </h3>
            <h3 className="text-2xl font-bold">Your Order is confirmed.</h3>
            <p className="text-xl">
              You can check your order status in your dashboard.{" "}
            </p>
          </div>
          <Button variant="primary" to="/shop">
            Continue Shopping
          </Button>
        </div>
      </>
    ),
    failed: (
      <>
        <div className="hidden lg:flex" data-aos="fade-left">
          <img
            src={require("../../assets/Payment-Error.jpg")}
            alt="Successfull Payment"
            width={400}
          />
        </div>
        <div
          className="flex flex-col  items-center justify-center gap-6 text-center"
          data-aos="fade-right"
        >
          <BsXCircle size={100} className="mx-auto text-red-500" />
          <div className="flex flex-col flex-wrap gap-2">
            <h3 className="text-2xl font-medium">Oops!</h3>
            <h3 className="text-2xl font-bold">Sorry, Payment Failed!</h3>
            <p className="text-xl">
              Your payment was not successfully processed.
            </p>
          </div>
          <Button variant="secondary" to="/cart">
            Try Again
          </Button>
        </div>
      </>
    ),
  };

  return (
    <section className="container flex min-h-[300px] flex-wrap justify-center gap-12 py-12 px-4">
      {paymentSuccess ? render.successfull : render.failed}
    </section>
  );
}
