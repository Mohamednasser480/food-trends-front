import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineShopping, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { ProductIcon, QuickviewProduct } from "./";
import "./ProductIcons.css";
import { Modal } from "../UI";

export default function ProductIcons(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={props.className}>
      <ProductIcon tooltip="Add to Wishlist" border>
        <AiOutlineStar size={25} className={"text-black transition-all"} />
      </ProductIcon>

      <ProductIcon
        tooltip="Quick view"
        onClickHandler={() => {
          setIsShown(true);
        }}
      >
        <AiOutlineEye size={25} className={"text-black transition-all"} />
      </ProductIcon>

      <Modal
        show={isShown}
        setShow={setIsShown}
        className="h-fit w-full md:w-3/4 lg:w-1/2 "
      >
        <QuickviewProduct productInfo={props.productDetails} />
      </Modal>

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
