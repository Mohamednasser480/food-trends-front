import React from "react";
import { Typography } from "../UI";
import { Link } from "react-router-dom";
import { QuantityInput } from "./index";
import { HiOutlineX } from "react-icons/hi";

const CartSidebarItem = (props) => {
  const { cartProduct, onQuantitySubmit, onItemRemove } = props;
  const { _id, productName, images, price, quantity } = cartProduct;

  return (
    <li className="flex gap-x-3">
      <div className="flex items-center">
        <button
          onClick={onItemRemove}
          className="transition-colors hover:text-error"
        >
          <HiOutlineX className="h-5 w-5" />
        </button>
      </div>
      <div className="w-24">
        <img
          className="max-w-full"
          src={
            images?.length
              ? `${process.env.REACT_APP_API_URI}/${images[0]}`
              : ""
          }
          alt={productName}
        />
      </div>
      <section className="flex flex-1 flex-col gap-y-4">
        <Typography
          component="subtitle2"
          className="flex justify-between gap-x-3"
        >
          <Link to="/" className="transition-colors hover:text-primary">
            {productName}
          </Link>
          <Typography component="body1">${price?.toFixed(2)}</Typography>
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
