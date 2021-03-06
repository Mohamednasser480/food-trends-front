import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineShopping, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { ProductIcon, QuickviewProduct } from "./";
import "./ProductIcons.css";
import { Modal } from "../UI";

export default function ProductIcons(props) {
  const [modalExists, setModalExists] = useState(false);

  return (
    <div className={props.className}>
      <ProductIcon tooltip="Add to Wishlist">
        <AiOutlineStar size={25} className={"text-black transition-all"} />
      </ProductIcon>

      <ProductIcon
        tooltip="Quick view"
        onClickHandler={() => {
          setModalExists(true);
        }}
      >
        <AiOutlineEye size={25} className={"text-black transition-all"} />
      </ProductIcon>

      
      {modalExists && (
        <Modal
          setModalExists={setModalExists}
          className="h-1/2 min-w-[970px]   cursor-default bg-white  p-5"
          effect="flip-down"
        >
          <QuickviewProduct />
        </Modal>
      )}

      <ProductIcon tooltip="Add to Cart">
        <AiOutlineShopping size={25} className={"text-black transition-all"} />
      </ProductIcon>

      {/* Iniliaze Tooltip */}
      <ReactTooltip
        effect="solid"
        className="!w-fit !px-2 !py-1 !font-satoshi !font-medium"
      />
    </div>
  );
}
