import { AiOutlineStar } from "react-icons/ai";
import React from "react";

const Wishlist = () => {
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

export default Wishlist;
