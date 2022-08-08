import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Sidebar } from "../../UI";
import { useSelector } from "react-redux";
import { selectAllCartItems } from "../../../store/slices/cart";

const CartSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const cartProducts = useSelector(selectAllCartItems);
  const cartProductsCount = cartProducts.reduce(
    (prevVal, product) => prevVal + product.quantity,
    0
  );
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
        <div>Cart Sidebar</div>
      </Sidebar>
    </>
  );
};

export default CartSidebar;
