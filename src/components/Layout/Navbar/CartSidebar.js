import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Alert, Button, Loader, Sidebar, Typography } from "../../UI";
import { useSelector } from "react-redux";
import {
  selectAllCartItems,
  selectStatus,
  selectError,
  selectTotalPrice,
} from "../../../store/slices/cart";
import { CartList, EmptyCart, TotalPrice } from "../../Cart";

const CartSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const cartProducts = useSelector(selectAllCartItems);
  const cartStatus = useSelector(selectStatus);
  const error = useSelector(selectError);
  const cartProductsCount = cartProducts.reduce(
    (prevVal, product) => prevVal + product.quantity,
    0
  );
  const totalPrice = useSelector(selectTotalPrice);

  const render = {
    loading: <Loader />,
    error: <Alert>{error}</Alert>,
  };

  return (
    <>
      <div className="relative">
        <AiOutlineShopping
          size={25}
          cursor={"pointer"}
          className={"transition-all hover:text-green-800"}
          onClick={() => {
            setShowSidebar(true);
          }}
        />
        <span className="absolute -top-1.5 -right-2 flex h-5  w-5 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
          {cartProductsCount}
        </span>
      </div>
      <Sidebar show={showSidebar} setShow={setShowSidebar} right={true}>
        {render[cartStatus] ? render[cartStatus] : null}
        {cartProducts.length ? (
          <div className="flex flex-col gap-y-5 pt-5">
            <Typography component="h3">shopping cart</Typography>
            <ul className="border-t border-b p-3">
              <CartList form="sidebar" />
            </ul>
            <TotalPrice totalPrice={totalPrice} />
            <div className="flex flex-col gap-3">
              <Button
                variant="secondary"
                to="/shop"
                onClick={() => {
                  setShowSidebar(false);
                }}
              >
                continue shopping
              </Button>
              <Button
                className="flex gap-x-3 bg-transparent text-black hover:text-primary"
                variant="primary"
                to="/cart"
                onClick={() => {
                  setShowSidebar(false);
                }}
              >
                view shopping cart
              </Button>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </Sidebar>
    </>
  );
};

export default CartSidebar;
