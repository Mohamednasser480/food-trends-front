import React from "react";
import { Button, Typography } from "../UI";

const EmptyCart = ({ hideSidebar }) => {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <img
        className="max-w-[20rem]"
        src="https://ecomm.thememove.com/organic/wp-content/themes/ecomm/assets/woocommerce/empty-cart.png"
        alt="alt"
      />
      <Typography variant="h3" component="h2">
        Your cart is currently empty.
      </Typography>
      <Typography component="body2">
        You may check out all the available products and buy some in the shop.
      </Typography>
      <Button
        to="/shop"
        variant="secondary"
        onClick={() => {
          hideSidebar(false);
        }}
      >
        return to shop
      </Button>
    </div>
  );
};

export default EmptyCart;
