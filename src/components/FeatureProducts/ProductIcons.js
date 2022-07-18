import React from "react";
import { AiOutlineShopping, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import ProductIcon from "./ProductIcon";
import "./ProductIcons.css";

export default function ProductIcons(props) {
  return (
    <div className={props.className}>
      <ProductIcon>
        <AiOutlineStar size={25} className={"text-black transition-all"} />
      </ProductIcon>
      <ProductIcon>
        <AiOutlineEye size={25} className={"text-black transition-all"} />
      </ProductIcon>
      <ProductIcon>
        <AiOutlineShopping size={25} className={"text-black transition-all"} />
      </ProductIcon>
    </div>
  );
}
