import React from "react";
import { Typography } from "../UI";
import { Link } from "react-router-dom";
import { QuantityInput } from "./index";
import { HiOutlineX } from "react-icons/hi";

const CartSidebarItem = (props) => {
  const { cartProduct, onQuantitySubmit, onItemRemove } = props;
  const { _id, productName, images, price, quantity } = cartProduct;

  return (
    <li className="flex gap-x-3 items-center border-b-2 py-2 last:border-0">
      <div className="flex items-center">
        <button
          onClick={onItemRemove}
          className="transition-colors hover:text-error"
        >
          <HiOutlineX className="h-5 w-5" />
        </button>
      </div>
      <div className="w-16 ">
        <img className="max-w-full" src={images?.length?images[0]:""} alt={productName} />
      </div>
      <section className="flex grow flex-col gap-y-6">
        <Typography
          component="subtitle2"
          className="flex justify-between gap-x-3"
        >
          <Link to={`/shop/${_id}`} className="transition-colors hover:text-primary">
            {productName}
          </Link>
          <Typography component="body1">{price?.toFixed(2)} LE</Typography>
        </Typography>
        <div className="flex justify-end">
          <QuantityInput
            cartProduct={cartProduct}
            onQuantitySubmit={onQuantitySubmit}
          />
        </div>
      </section>
    </li>
  );
};

export default CartSidebarItem;
