import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineShopping, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { ProductIcon, QuickviewProduct } from "./";
import "./ProductIcons.css";
import { Modal, Spinner } from "../UI";
import {
  saveCartItem,
  selectAllCartItems,
  selectStatus,
} from "../../store/slices/cart";
import { useDispatch, useSelector } from "react-redux";

export default function ProductIcons(props) {
  const { className, productDetails } = props;
  const dispatch = useDispatch();
  const cartStatus = useSelector(selectStatus);
  const cartProducts = useSelector(selectAllCartItems);
  const productQuantity =
    cartProducts.find(
      (cartProduct) => cartProduct.product === productDetails._id
    )?.quantity || 0;
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={className}>
      <ProductIcon tooltip="Add to Wishlist" border>
        <AiOutlineStar size={25} className={"text-black transition-all"} />
      </ProductIcon>

      <ProductIcon
        tooltip="Quick view"
        onClick={() => {
          setIsShown(true);
        }}
      >
        <AiOutlineEye size={25} className={"text-black transition-all"} />
      </ProductIcon>

      <Modal
        show={isShown}
        setShow={setIsShown}
        className="h-fit w-full p-5 lg:w-3/4 xl:w-1/2"
      >
        <QuickviewProduct productInfo={productDetails} />
      </Modal>

      <ProductIcon
        tooltip="Add to Cart"
        onClick={() =>
          dispatch(
            saveCartItem({
              ...productDetails,
              quantity: productQuantity + 1,
            })
          )
        }
        disabled={cartStatus === "loading"}
      >
        {cartStatus === "loading" ? (
          <Spinner className="border-black hover:border-white" />
        ) : (
          <AiOutlineShopping
            size={25}
            className={"text-black transition-all"}
          />
        )}
      </ProductIcon>

      {/* Iniliaze Tooltip */}
      <ReactTooltip
        effect="solid"
        className="!font-satoshi !w-fit !px-2 !py-1 !font-medium"
      />
    </div>
  );
}
