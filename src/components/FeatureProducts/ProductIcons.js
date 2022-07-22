import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineShopping, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { ProductIcon, QuickviewProduct } from "./";
import "./ProductIcons.css";
import { Modal } from "../UI";

export default function ProductIcons(props) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    // To stop clicking on Children
    if (e) {
      if (e.target !== e.currentTarget) return;
    }
    setShowModal(!showModal);
  }

  return (
    <div className={props.className}>
      <ProductIcon tooltip="Add to Wishlist">
        <AiOutlineStar size={25} className={"text-black transition-all"} />
      </ProductIcon>

      <ProductIcon tooltip="Quick view" onClickHandler={toggleModal}>
        <AiOutlineEye
          size={25}
          className={"text-black transition-all"}
          onClick={() => {
            toggleModal();
          }}
        />

        {showModal && (
          <Modal
            toggleModal={toggleModal}
            className="h-1/2 min-w-[970px]   cursor-default bg-white  p-5"
            effect="flip-down"
          >
            <QuickviewProduct />
          </Modal>
        )}
      </ProductIcon>

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
