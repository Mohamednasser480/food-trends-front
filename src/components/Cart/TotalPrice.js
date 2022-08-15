import React from "react";
import { Typography } from "../UI";
const DELIVERY_FEES = 10;

const TotalPrice = (props) => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* <div className="flex justify-between gap-x-3 border-b pb-5">
        <Typography component="body1" className="capitalize">
          subtotal:
        </Typography>
        <Typography component="body1" className="tracking-wide !text-primary">
          {props.totalPrice.toFixed(2)} LE
        </Typography>
      </div> */}
      <div className="flex justify-between gap-x-3">
        <Typography component="body1" className="capitalize !text-black">
          total:
        </Typography>
        <Typography component="body1" variant="h5" className="!text-3xl">
          {/* {(props.totalPrice + DELIVERY_FEES).toFixed(2)} LE */}
          {(props.totalPrice ).toFixed(2)} LE
        </Typography>
      </div>
    </div>
  );
};

export default TotalPrice;
