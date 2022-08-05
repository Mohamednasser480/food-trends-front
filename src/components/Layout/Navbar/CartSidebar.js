import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Sidebar } from "../../UI";

const CartSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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
        <span className="absolute -top-1.5 -right-2 flex h-5  w-5 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white"></span>
      </div>
      <Sidebar show={showSidebar} setShow={setShowSidebar} right={true}>
        <div>Cart Sidebar</div>
      </Sidebar>
    </>
  );
};

export default CartSidebar;
