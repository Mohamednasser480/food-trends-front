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
      <ProductIcon tooltip="Add to Wishlist" border>
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
          className="flex  h-fit w-full cursor-default items-center justify-center  bg-white p-5 md:h-[600px] lg:w-[970px] lg:p-0  "
          effect="flip-down"
        >
          <QuickviewProduct productInfo={props.productInfo} />
        </Modal>
      )}

      <ProductIcon tooltip="Add to Cart">
        <AiOutlineShopping size={25} className={"text-black transition-all"} />
      </ProductIcon>

      {/* Iniliaze Tooltip */}
      <ReactTooltip
        effect="solid"
        className="!font-satoshi !w-fit !px-2 !py-1 !font-medium"
      />
    </div>
  );
}
