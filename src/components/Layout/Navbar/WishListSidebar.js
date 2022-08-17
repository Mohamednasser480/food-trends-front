import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const WishListSidebar = () => {
  return (
    <>
      <AiOutlineStar
        size={25}
        cursor={"pointer"}
        className={"transition-all hover:text-green-800"}
      />
    </>
  );
};

export default WishListSidebar;
