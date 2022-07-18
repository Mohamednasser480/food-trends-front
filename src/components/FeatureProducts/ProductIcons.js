import React from "react";
import ReactTooltip from 'react-tooltip';
import { AiOutlineShopping, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import ProductIcon from "./ProductIcon";
import "./ProductIcons.css";

export default function ProductIcons(props) {
  return (
    <div className={props.className}>
      <ProductIcon tooltip="Add to Wishlist">
        <AiOutlineStar size={25} className={"text-black transition-all"} />
      </ProductIcon>
      <ProductIcon tooltip="Quick view">
        <AiOutlineEye size={25} className={"text-black transition-all"} />
      </ProductIcon>
      <ProductIcon tooltip="Add to Cart">
        <AiOutlineShopping size={25} className={"text-black transition-all"} />
      </ProductIcon>

      {/* Iniliaze Tooltip */}
      <ReactTooltip effect="solid" className="!font-satoshi !px-2 !py-1 !font-medium " />

    </div>
  );
}
